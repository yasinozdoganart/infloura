import { ScenarioDefinition } from "@/types/simulation";

export const scenarios: Record<string, ScenarioDefinition> = {
    conservative: {
        name: "Conservative",
        growthRate: 0.05,
        conversionMultiplier: 0.7,
        monetizationDelay: 3,
    },
    realistic: {
        name: "Realistic",
        growthRate: 0.12,
        conversionMultiplier: 1.0,
        monetizationDelay: 1,
    },
    aggressive: {
        name: "Aggressive",
        growthRate: 0.25,
        conversionMultiplier: 1.4,
        monetizationDelay: 0,
    }
};
