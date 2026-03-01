import { GoogleGenerativeAI } from '@google/generative-ai';
import { SimulationInput, SimulationResult } from '@/types/simulation';
import { SYSTEM_PROMPT } from './prompts';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

function getModel() {
    return genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: SYSTEM_PROMPT,
    });
}

export async function generateMonetizationRoadmap(simulationData: SimulationResult, userInputs: SimulationInput) {
    const model = getModel();

    const prompt = `
Generate a month-by-month monetization roadmap (1-12 months) based on this data.
Return ONLY valid JSON with this structure:
{
  "roadmap": [
    { "month": 1, "focus": "string", "actions": ["string", "string"] }
  ]
}

Simulation Data: ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
    return JSON.parse(jsonStr);
}

export async function generateRiskAnalysis(simulationData: SimulationResult, userInputs: SimulationInput) {
    const model = getModel();

    const prompt = `
Generate a risk analysis based on this data.
Return ONLY valid JSON with this structure:
{
  "risks": [
    { "type": "Niche Saturation" | "Platform Dependency" | "Revenue Volatility", "level": "Low" | "Medium" | "High", "description": "string", "mitigation": "string" }
  ]
}

Simulation Data: ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
    return JSON.parse(jsonStr);
}

export async function generateOptimizationAdvice(simulationData: SimulationResult, userInputs: SimulationInput, trackingData: any) {
    const model = getModel();

    const prompt = `
Generate optimization and corrective advice based on this data.
Return ONLY valid JSON with this structure:
{
  "advice": [
    { "area": "Content Strategy" | "Monetization Efficiency" | "Correction", "suggestion": "string" }
  ]
}

Simulation Data: ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
Tracking Data: ${JSON.stringify(trackingData)}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
    return JSON.parse(jsonStr);
}
