export interface ScenarioDefinition {
    name: "Conservative" | "Realistic" | "Aggressive";
    growthRate: number;
    conversionMultiplier: number;
    monetizationDelay: number;
}

export interface SimulationInput {
    platform: 'youtube' | 'tiktok' | 'instagram' | 'x';
    audienceSize: number;
    monthlyReach: number;
    engagementRate?: number;
    rpm?: number;
    productPrice?: number;
    monthlyCosts?: number;
}

export interface MonthlyProjection {
    month: number;
    audienceSize: number;
    monthlyReach: number;
    totalRevenue: number;
    revenueBreakdown: Record<string, number>;
    netProfit: number;
}

export interface SimulationResult {
    scenario: string;
    projections: MonthlyProjection[];
    milestones: {
        timeTo1k: number | null;
        timeTo5k: number | null;
        timeTo10k: number | null;
        breakEvenMonth: number | null;
    };
}
