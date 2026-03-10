import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
    try {
        const { topic } = await request.json();

        if (!topic) {
            return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
        }

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: 'AI is currently unavailable (API Key missing)' }, { status: 503 });
        }

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: `You are an elite YouTube strategist and copywriter. Your goal is to write highly clickable, emotionally engaging, and curiosity-inducing YouTube video titles. You understand the psychology of the click. Avoid overly generic clickbait, instead focus on the "information gap" and high stakes. Return ONLY valid JSON containing an array of exactly 5 titles. Structure: { "titles": [ { "title": "string", "reasoning": "string" } ] }`,
        });

        const prompt = `Generate 5 viral YouTube titles for the following topic/idea: "${topic}"`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        
        // Clean JSON parsing
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(jsonStr);

        return NextResponse.json(parsed);
    } catch (error) {
        console.error('Title Generation Error:', error);
        return NextResponse.json({ error: 'Failed to generate titles' }, { status: 500 });
    }
}
