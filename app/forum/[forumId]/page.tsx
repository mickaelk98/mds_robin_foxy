"use client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useAuthStore } from "@/app/lib/stores/auth-store";
import { useMessageStore } from "@/app/lib/stores/message-store";
import { forumsService } from "@/app/services/forums";
import { messagesService } from "@/app/services/message";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { Chewy } from "next/font/google";
import type { Forum } from "@/app/interfaces/forum";
import { ArrowBigLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const chewy = Chewy({ subsets: ["latin"], weight: ["400"] });
export default function ForumChatPage() {
    const { forumId } = useParams();
    const { user } = useAuthStore();
    const { messages, setMessages, addMessage, clearMessages } = useMessageStore();
    const [forum, setForum] = useState<Forum | null>(null);
    const [content, setContent] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    // Récupère le forum
    useEffect(() => {
        async function fetchForum() {
            const forums = await forumsService.getAllForums();
            const found = forums?.find((f) => f.id === forumId || f.$id === forumId);
            setForum(found || null);
        }
        fetchForum();
    }, [forumId]);
    // Récupère les messages
    useEffect(() => {
        if (!forumId) return;
        setLoading(true);
        messagesService.getMessagesByForumId(forumId as string).then((msgs) => {
            setMessages(msgs);
            setLoading(false);
        });
        // Subscribe realtime
        const unsubscribe = messagesService.subscribeToMessages(forumId as string, (msg) => {
            addMessage(msg);
        });
        return () => {
            unsubscribe();
            clearMessages();
        };
        // eslint-disable-next-line
    }, [forumId, setMessages, addMessage, clearMessages]);
    // Scroll auto
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    // Envoi message
    const sendMessage = async () => {
        if (!content.trim() || !user) return;
        await messagesService.sendMessage({ forumId: forumId as string, userId: user.id || user.$id, content });
        setContent("");
    };
    return (
        <div className="flex flex-col h-screen bg-[var(--orange-100)]">
            {/* Header forum */}
            <div className="flex items-center flex-col md:flex-row justify-between gap-2 p-4 bg-white shadow">
                <div className="flex items-center justify-between gap-4" >
                    {forum?.image && <Image src={forum.image} alt={forum.title} width={50} height={50} className="rounded-full" />}
                    <div>
                        <h2 className={`font-bold text-xl ${chewy.className}`}>{forum?.title}</h2>
                        <p className="text-sm text-gray-500">{forum?.description}</p>
                    </div>
                </div>
                <ArrowBigLeft onClick={() => router.push("/forum")} className="self-end text-[var(--orange-200)] cursor-pointer" size={40} />
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
                {loading && <div className="text-center text-gray-400">Chargement...</div>}
                {messages.map((msg) => (
                    <div
                        key={msg.$id}
                        className={`max-w-[70%] px-4 py-2 rounded-2xl mb-2 break-words ${msg.userId === (user?.id || user?.$id)
                            ? "bg-[var(--green-200)] self-end ml-auto"
                            : "bg-white self-start mr-auto"
                            }`}
                    >
                        <span className="block text-sm">{msg.content}</span>
                        {/* <span className="block text-xs text-gray-400">{formatDate(msg.$createdAt)}</span> */}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            {/* Input */}
            <form
                onSubmit={e => {
                    e.preventDefault();
                    sendMessage();
                }}
                className="flex gap-2 p-4 bg-white"
            >
                <Input
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="Votre message..."
                    className="flex-1"
                />
                <Button type="submit" className="bg-[var(--blue-200)] text-white rounded-full">
                    Envoyer
                </Button>
            </form>
        </div>
    );
}