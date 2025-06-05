// services/auth.ts
import { databases } from "@/app/lib/appwrite";
import { Forum } from "@/app/interfaces/forum";

export const forumsService = {
    async getAllForums(): Promise<Forum[] | null> {
        try {


            const forums = await databases.listDocuments<Forum>(
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}`,
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_FORUMSID}`,
            );

            if (forums.documents.length === 0) return null;

            return forums.documents;
        } catch {
            return null;
        }
    },
};

