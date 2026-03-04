import { NextResponse } from 'next/server';
import { runSimulation } from '@/lib/math/revenueEngine';
import { SimulationInput } from '@/types/simulation';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const inputData: SimulationInput = body;

        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        let planType = 'free';

        if (user) {
            let { data: profile } = await supabase.from('profiles').select('plan_type').eq('id', user.id).single();
            if (!profile) {
                const { data: newProfile, error: profileErr } = await supabase.from('profiles').insert({
                    id: user.id,
                    email: user.email,
                    full_name: user.user_metadata?.full_name || 'Creator',
                    plan_type: 'free',
                    trial_ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                }).select().single();

                if (profileErr) console.error("Profile creation error:", profileErr);
                profile = newProfile || { plan_type: 'free' };
            }
            planType = profile?.plan_type || 'free';
        }

        const limit = (planType === 'free' || planType === 'free_trial') ? 3 : 12;

        const conservative = runSimulation(inputData, 'conservative', limit);
        const realistic = runSimulation(inputData, 'realistic', limit);
        const aggressive = runSimulation(inputData, 'aggressive', limit);

        const result = {
            platform: inputData.platform,
            scenarios: {
                conservative,
                realistic,
                aggressive
            }
        };

        if (user) {
            const { data: sim } = await supabase.from('simulations').insert({
                user_id: user.id,
                platform_name: inputData.platform,
                input_data: inputData,
                conservative_projection: conservative.projections,
                realistic_projection: realistic.projections,
                aggressive_projection: aggressive.projections,
                milestones: realistic.milestones
            }).select().single();

            return NextResponse.json({ ...result, simulationId: sim.id, planType });
        }

        // Unauthenticated or read-only
        return NextResponse.json({ ...result, planType: 'free' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to run simulation' }, { status: 500 });
    }
}
