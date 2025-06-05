import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";
import type { ChatMessage, ChatResponse } from "@/app/interfaces/chat";

const openai = new OpenAI({
    baseURL: process.env.DEEPSEEK_API_URL,
    apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        console.log("mes clefs", process.env.DEEPSEEK_API_KEY, process.env.DEEPSEEK_API_URL);
        const body = await req.json();
        const { messages } = body as { messages: ChatMessage[] };

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Format de messages invalide" },
                { status: 400 }
            );
        }

        const completion = await openai.chat.completions.create({
            messages,
            model: "deepseek-chat",
        });

        const response: ChatResponse = {
            reply: completion.choices[0].message.content || "Désolé, je n'ai pas pu générer de réponse."
        };

        return NextResponse.json(response);
    } catch (err) {
        console.error('Error:', err);
        const errorMessage = err instanceof Error ? err.message : "Une erreur inattendue s'est produite";

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
} 