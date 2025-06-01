// services/auth.ts
import { databases } from "@/app/lib/appwrite";
import { Forum } from "@/app/interfaces/forum"

// Service pour les messages du forum
import { ID, client } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import type { Message } from "@/app/interfaces/message";

export const forumsService = {
    async getAllForums(): Promise<Forum[] | null> {
        try {


            const forums = await databases.listDocuments<Forum>(
                "682c1698002f2b240161",
                "683c9b3b000fa3756127",
            );

            if (forums.documents.length === 0) return null;

            return forums.documents;
        } catch {
            return null;
        }
    },
};

export const messagesService = {
    async getMessagesByForumId(forumId: string): Promise<Message[]> {
        const res = await databases.listDocuments<Message>(
            "682c1698002f2b240161", // databaseId
            "683cccbc00173d49fc18", // collectionId messages (à adapter si besoin)
            [Query.equal("forumId", forumId), Query.orderDesc("$createdAt")]
        );
        return res.documents.reverse();
    },
    async sendMessage({ forumId, userId, content }: { forumId: string; userId: string; content: string; }) {
        return databases.createDocument(
            "682c1698002f2b240161",
            "683cccbc00173d49fc18",
            ID.unique(),
            { forumId, userId, content }
        );
    },
    subscribeToMessages(forumId: string, cb: (msg: Message) => void) {
        return client.subscribe(
            [
                `databases.682c1698002f2b240161.collections.683cccbc00173d49fc18.documents`
            ],
            (response) => {
                const payload = response.payload as Message;
                if (
                    response.events.includes("databases.*.collections.*.documents.create") &&
                    payload.forumId === forumId
                ) {
                    cb(payload);
                }
            }
        );
    }
};