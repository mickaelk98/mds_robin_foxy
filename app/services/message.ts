// services/message.ts - Version simplifiée
import { databases } from "@/app/lib/appwrite";
import { ID, client } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import type { Message } from "@/app/interfaces/message";

export const messagesService = {
    async getMessagesByForumId(forumId: string): Promise<Message[]> {
        const res = await databases.listDocuments<Message>(
            `${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}`,
            `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_MESSAGESID}`,
            [Query.equal("forumId", forumId), Query.orderDesc("$createdAt")]
        );
        return res.documents.reverse();
    },

    async sendMessage({ forumId, userId, content }: { forumId: string; userId: string; content: string; }) {
        return databases.createDocument(
            `${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}`,
            `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_MESSAGESID}`,
            ID.unique(),
            { forumId, userId, content }
        );
    },

    subscribeToMessages(forumId: string, cb: (msg: Message) => void) {
        const unsubscribe = client.subscribe(
            [`databases.${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}.collections.${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_MESSAGESID}.documents`],
            (response) => {
                console.log("📨 Raw subscription event:", response);

                // Vérifie si c'est un événement de création
                if (response.events.includes(`databases.${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}.collections.${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_MESSAGESID}.documents.*.create`)) {
                    const payload = response.payload as Message;
                    console.log("🆕 Document created:", payload);

                    // Vérifie si c'est pour le bon forum
                    if (payload.forumId === forumId) {
                        console.log("✅Message du bon forum");
                        cb(payload);
                    } else {
                        console.log("❌ Message d'un forum different");
                    }
                }
            }
        );

        return unsubscribe;
    }
};