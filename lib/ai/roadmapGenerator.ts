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

export async function generateMonetizationRoadmap(simulationData: SimulationResult, userInputs: SimulationInput, locale: string = 'en') {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
  const model = getModel();

  const prompt = `
Generate a month-by-month monetization roadmap (1-12 months) based on this data.
CRITICAL: Tailor your entire strategy ONLY to the platform specified in the User Inputs (${userInputs.platform}). Do not provide advice for other platforms (e.g., if platform is Instagram, do not mention YouTube). Let the user know if their revenue projection is 0, it means they need to focus on audience growth first before monetization kicks in.

Return ONLY valid JSON with this structure:
{
  "roadmap": [
    { "month": 1, "focus": "string", "actions": ["string", "string"] }
  ]
}

LANGUAGE INSTRUCTION: The user's locale is '${locale}'. If '${locale}' is 'tr', all string values in the JSON ("focus", "actions") MUST be written in perfect, natural Turkish. 
CRITICAL CURRENCY INSTRUCTION: Even when writing in Turkish, you MUST keep all currency symbols as '$' and monetary expectations in USD (e.g., "$1,000", "$5,000"). Do absolutely NOT use "TRY", "₺", or "TL".

Simulation Data (Target 12-month Revenue): ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
  return JSON.parse(jsonStr);
}

export async function generateRiskAnalysis(simulationData: SimulationResult, userInputs: SimulationInput, locale: string = 'en') {
  const model = getModel();

  const prompt = `
Generate a risk analysis based on this data.
Return ONLY valid JSON with this structure:
{
  "risks": [
    { "type": "Niche Saturation" | "Platform Dependency" | "Revenue Volatility", "level": "Low" | "Medium" | "High", "description": "string", "mitigation": "string" }
  ]
}

LANGUAGE INSTRUCTION: The user's locale is '${locale}'. If '${locale}' is 'tr', the "description" and "mitigation" strings MUST be in perfect Turkish. DO NOT translate the "type" or "level" enum keys, keep them exact as requested! 
CRITICAL CURRENCY INSTRUCTION: You MUST keep all currency symbols as '$' and monetary references in USD. Do absolutely NOT use "TL" or "₺".

Simulation Data: ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
  return JSON.parse(jsonStr);
}

export async function generateOptimizationAdvice(simulationData: SimulationResult, userInputs: SimulationInput, trackingData: any, locale: string = 'en') {
  const model = getModel();

  const prompt = `
Generate optimization and corrective advice based on this data.
Return ONLY valid JSON with this structure:
{
  "advice": [
    { "area": "Content Strategy" | "Monetization Efficiency" | "Correction", "suggestion": "string" }
  ]
}

LANGUAGE INSTRUCTION: The user's locale is '${locale}'. If '${locale}' is 'tr', the "suggestion" strings MUST be in perfect Turkish. DO NOT translate the "area" enum keys, keep them exact as requested!
CRITICAL CURRENCY INSTRUCTION: You MUST keep all currency symbols as '$' and monetary references in USD. Do absolutely NOT use "TL" or "₺".

Simulation Data: ${JSON.stringify(simulationData)}
User Inputs: ${JSON.stringify(userInputs)}
Tracking Data: ${JSON.stringify(trackingData)}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const jsonStr = text.replace(/```json/g, '').replace(/```/g, '');
  return JSON.parse(jsonStr);
}
