import { account, databases } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import type { User } from "@/app/interfaces";
import type { UpdateUserFormData } from "@/app/interfaces/user";
import { AppwriteException } from "appwrite"

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
    async updateUser(data: UpdateUserFormData, user: User): Promise<User> {
        try {
            const finalData = {
                firstname: data.firstname ? data.firstname : user.firstname,
                lastname: data.lastname ? data.lastname : user.lastname,
                pseudo: data.pseudo ? data.pseudo : user.pseudo,
                email: data.email ? data.email : user.email,
                phone: data.phone ? data.phone : user.phone,
                type: data.type ? data.type : user.type,
                ...(data.type === "professional" && { profession: data.profession ? data.profession : user.profession }),
            }

            await account.updateName(`${finalData.firstname} ${finalData.lastname}`);
            // await account.updateEmail(finalData.email, finalData.password);


            const accountData = await account.get();

            const userDocs = await databases.listDocuments<User>(
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}`,
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_USERSID}`,
                [Query.equal("accountId", accountData.$id)]
            );
            if (userDocs.documents.length === 0) throw new Error("Utilisateur non trouvé");

            const userDoc = userDocs.documents[0];

            const updatedUser = await databases.updateDocument<User>(
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASEID}`,
                `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_USERSID}`,
                userDoc.$id,
                {
                    firstname: finalData.firstname,
                    lastname: finalData.lastname,
                    pseudo: finalData.pseudo,
                    email: finalData.email,
                    phone: finalData.phone,
                    type: finalData.type,
                    ...(data.type === "professional" && { profession: data.profession }),
                }
            );

            return updatedUser;
        } catch (error: unknown) {
            throw new Error(getErrorMessage(error) || "Erreur lors de la mise à jour du compte");
        }
    }
};