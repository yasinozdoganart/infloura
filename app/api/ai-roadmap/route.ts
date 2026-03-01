import { NextResponse } from 'next/server';
import { generateMonetizationRoadmap, generateRiskAnalysis, generateOptimizationAdvice } from '@/lib/ai/roadmapGenerator';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
    try {
        const { simulationId, inputData, simulationResult, reportType, trackingData } = await request.json();

        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            const { data: profile } = await supabase.from('profiles').select('plan_type').eq('id', user.id).single();
            if (!profile || profile.plan_type === 'free') {
                return NextResponse.json({ error: 'Upgrade to Pro to access AI Roadmap' }, { status: 403 });
            }
        }

        let reportContent;

        if (reportType === 'roadmap') {
            reportContent = await generateMonetizationRoadmap(simulationResult, inputData);
        } else if (reportType === 'risk_analysis') {
            reportContent = await generateRiskAnalysis(simulationResult, inputData);
        } else if (reportType === 'optimization') {
            reportContent = await generateOptimizationAdvice(simulationResult, inputData, trackingData);
        } else {
            return NextResponse.json({ error: 'Invalid report type' }, { status: 400 });
        }

        if (simulationId && user) {
            await supabase.from('ai_reports').insert({
                user_id: user.id,
                simulation_id: simulationId,
                report_type: reportType,
                content: reportContent
            });
        }

        return NextResponse.json(reportContent);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message || 'Failed to generate AI report' }, { status: 500 });
    }
}
