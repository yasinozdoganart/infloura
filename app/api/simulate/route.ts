import { NextResponse } from 'next/server';
import { runSimulation } from '@/lib/math/revenueEngine';
import { SimulationInput } from '@/types/simulation';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const inputData: SimulationInput = body;

        const conservative = runSimulation(inputData, 'conservative');
        const realistic = runSimulation(inputData, 'realistic');
        const aggressive = runSimulation(inputData, 'aggressive');

        const result = {
            platform: inputData.platform,
            scenarios: {
                conservative,
                realistic,
                aggressive
            }
        };

        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            // Check for free plan limitation (max 1 simulation ideally, but just saving here)
            const { data: profile } = await supabase.from('profiles').select('plan_type').eq('id', user.id).single();
            const planType = profile?.plan_type || 'free';

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
