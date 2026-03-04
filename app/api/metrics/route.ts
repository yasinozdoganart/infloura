import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
        }

        // SELF-HEAL: If profile doesn't exist (because user signed up before SQL was run), create it
        const { data: profile } = await supabase.from('profiles').select('id').eq('id', user.id).single();
        if (!profile) {
            const { error: profileErr } = await supabase.from('profiles').insert({
                id: user.id,
                email: user.email,
                full_name: user.user_metadata?.full_name || 'Creator',
                plan_type: 'free',
                trial_ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            });
            if (profileErr) console.error("Profile creation error in metrics:", profileErr);
        }

        let { data: platform } = await supabase.from('platforms')
            .select('id').eq('user_id', user.id).eq('platform_name', body.platform_name).single();

        if (!platform) {
            const { data: newPlatform, error: platError } = await supabase.from('platforms')
                .insert({ user_id: user.id, platform_name: body.platform_name })
                .select('id').single();

            if (platError) throw platError;
            platform = newPlatform;
        }

        const { data, error } = await supabase.from('monthly_metrics').insert({
            user_id: user.id,
            platform_id: platform.id,
            month: body.month,
            followers: parseInt(body.followers),
            monthly_views: parseInt(body.monthly_views),
            actual_revenue: parseFloat(body.actual_revenue),
            engagement_rate: parseFloat(body.engagement_rate)
        });

        if (error) throw error;

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
        }

        const { data, error } = await supabase.from('monthly_metrics')
            .select('*')
            .eq('user_id', user.id)
            .order('month', { ascending: true })
            .limit(12);

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
