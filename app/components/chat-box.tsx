"use client";
import { useState, useRef } from "react";
import { Chewy } from "next/font/google";
import type { ChatMessage, ChatResponse } from "@/app/interfaces/chat";
import Image from "next/image";
import foxy from "@/app/assets/foxy-head.png"

const chewy = Chewy({
    subsets: ["latin"],
    weight: ["400"],
});

// On va utiliser fetch() pour parler à une API route locale
export function ChatBox() {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "system", content: `
            Tu es Foxy, un jeune renard malin et gentil.
            Tu parles simplement, avec des phrases courtes et claires.
            Tu aides les enfants, parents, personnes âgées et débutants à mieux comprendre les dangers d'internet, des réseaux sociaux et des sites web.
            Sois toujours rassurant, poli et encourageant.
            N’utilise pas de mots compliqués.
            Sois toujours clair et concis. Essaie de répondre en moins de 500 caractères si possible..
          `.trim(),
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);
        setError(null);

        const systemMessage = messages.find(msg => msg.role === "system");

        const newMessages: ChatMessage[] = [
            systemMessage!,
            ...messages.filter(msg => msg.role !== "system"),
            { role: "user", content: input.trim() }
        ];

        setMessages(newMessages);
        setInput("");

        try {
            const res = await fetch("/api/deepseek", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!res.ok) {
                console.error("Erreur lors de la réponse:", res);
                throw new Error(`Erreur HTTP: ${res.status}`);
            }

            const data: ChatResponse = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            if (data.reply) {
                setMessages([
                    ...newMessages,
                    { role: "assistant", content: data.reply }
                ]);
            }
        } catch (err) {
            console.error("Erreur lors de la réponse:", err);
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
            setMessages([
                ...newMessages,
                { role: "assistant", content: "Désolé, je n'ai pas pu traiter votre demande." }
            ]);
        } finally {
            setLoading(false);
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
        }
    };

    return (
        <>
            <Image src={foxy} alt="foxy" width={100} height={100} className={`self-end cursor-pointer ${showChat ? "hidden" : ""}`} onClick={() => setShowChat(true)} />
            {showChat && <div className="w-[95%] max-w-[420px] bg-[var(--orange-100)] self-end rounded-t-[20px] flex flex-col max-h-[80vh]">
                <div className="w-full bg-[var(--green-200)] p-2 rounded-t-[20px]">
                    <p className={`uppercase ${chewy.className}`}>floxbox</p>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-2 min-h-[250px]">
                    {messages
                        .filter(msg => msg.role !== "system")
                        .map((msg, i) => (
                            <div
                                key={i}
                                className={msg.role === "user"
                                    ? "text-right"
                                    : "text-left text-[var(--green-800)] font-semibold"}
                            >
                                <span>{msg.content}</span>
                            </div>
                        ))}
                    {error && (
                        <div className="text-red-500 text-sm mt-2">
                            {error}
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>
                <form onSubmit={handleSend} className="flex items-center p-2 gap-2 border-t border-[var(--green-200)]">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-1 px-2 py-1 rounded"
                        placeholder="Écris ton message..."
                        disabled={loading}
                        style={{ fontFamily: chewy.style.fontFamily }}
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="px-3 py-1 rounded bg-[var(--green-200)] text-white font-bold disabled:opacity-50"
                    >
                        {loading ? "..." : "Envoyer"}
                    </button>
                </form>
            </div>}
        </>
    );
}
