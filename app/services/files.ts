import { databases } from "@/app/lib/appwrite";
import { AppwriteException } from "appwrite";
import type { Files } from "@/app/interfaces/files";

function getErrorMessage(error: unknown): string {
    if (error instanceof AppwriteException) {
        return error.message;
    }
    if (error instanceof Error) {
        return error.message;
    }
    if (error && typeof error === 'object' && 'message' in error) {
        return String(error.message);
    }
    return 'Une erreur inattendue s\'est produite';
}


export const usersService = {
    async getAllfiles(): Promise<Files[]> {
        try {
            const result = await databases.listDocuments<Files>(
                `${process.env.APPWRITE_DATABASEID}`,
                `${process.env.APPWRITE_DATABASE_FILESID}`,
            );
            // result.documents est un tableau de tes documents typés Files
            return result.documents;
        } catch (error: unknown) {
            throw new Error(getErrorMessage(error) || "Erreur lors de la récupération des fichiers");
        }
    }
};