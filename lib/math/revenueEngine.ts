import { calculateYoutubeRevenue, calculateTiktokRevenue, calculateInstagramRevenue, calculateXRevenue } from "./platformCalculators";
import { scenarios } from "./scenarioModels";
import { SimulationInput, SimulationResult, MonthlyProjection } from "@/types/simulation";

export function runSimulation(input: SimulationInput, scenarioType: 'conservative' | 'realistic' | 'aggressive'): SimulationResult {
    const scenario = scenarios[scenarioType];
    const projections: MonthlyProjection[] = [];

    let currentAudience = input.audienceSize;
    let currentReach = input.monthlyReach;
    const costs = input.monthlyCosts ?? 50;

    for (let month = 1; month <= 12; month++) {
        currentAudience = Math.round(currentAudience * (1 + scenario.growthRate));
        currentReach = Math.round(currentReach * (1 + scenario.growthRate));

        let revenue = 0;
        let breakdown: Record<string, number> = {};

        if (month > scenario.monetizationDelay) {
            if (input.platform === 'youtube') {
                const res = calculateYoutubeRevenue(currentReach, input.rpm, currentAudience, input.engagementRate, 20, scenario.conversionMultiplier, input.productPrice);
                revenue = res.total;
                breakdown = { adRevenue: res.adRevenue, affiliateRevenue: res.affiliateRevenue, sponsorship: res.sponsorship, digitalProduct: res.digitalProduct, membership: res.membership };
            } else if (input.platform === 'tiktok') {
                const res = calculateTiktokRevenue(currentReach, currentAudience, input.engagementRate);
                revenue = res.total * scenario.conversionMultiplier;
                breakdown = { creatorFund: res.creatorFund, brandDeal: res.brandDeal, affiliate: res.affiliate };
            } else if (input.platform === 'instagram') {
                const res = calculateInstagramRevenue(currentAudience, currentReach, input.engagementRate, input.productPrice);
                revenue = res.total * scenario.conversionMultiplier;
                breakdown = { sponsoredPost: res.sponsoredPost, affiliateLink: res.affiliateLink, digitalProduct: res.digitalProduct };
            } else if (input.platform === 'x') {
                const res = calculateXRevenue(currentAudience, currentReach);
                revenue = res.total * scenario.conversionMultiplier;
                breakdown = { creatorSubscriptions: res.creatorSubscriptions, affiliate: res.affiliate, newsletter: res.newsletter };
            }
        }

        projections.push({
            month,
            audienceSize: currentAudience,
            monthlyReach: currentReach,
            totalRevenue: revenue,
            revenueBreakdown: breakdown,
            netProfit: revenue - costs
        });
    }

    let timeTo1k = null;
    let timeTo5k = null;
    let timeTo10k = null;
    let breakEvenMonth = null;

    for (const p of projections) {
        if (p.totalRevenue >= 1000 && !timeTo1k) timeTo1k = p.month;
        if (p.totalRevenue >= 5000 && !timeTo5k) timeTo5k = p.month;
        if (p.totalRevenue >= 10000 && !timeTo10k) timeTo10k = p.month;
        if (p.netProfit >= 0 && !breakEvenMonth) breakEvenMonth = p.month;
    }

    return {
        scenario: scenario.name,
        projections,
        milestones: { timeTo1k, timeTo5k, timeTo10k, breakEvenMonth }
    };
}
