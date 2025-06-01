// services/auth.ts
import { databases } from "@/app/lib/appwrite";
import { Forum } from "@/app/interfaces/forum"

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