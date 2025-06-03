import { account, ID, databases } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import type { RegisterFormData, LoginFormData } from "@/app/schemas";
import type { User, LoginErrorMessage } from "@/app/interfaces";
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

export const authService = {
  async register(data: RegisterFormData): Promise<User> {
    const { password, ...dataWithoutPassword } = data;
    try {
      const response = await account.create(
        ID.unique(),
        data.email,
        password,
        `${data.firstname} ${data.lastname}`
      );


      // Typer explicitement comme User
      const userDoc = await databases.createDocument<User>(
        "682c1698002f2b240161",
        "683798040029f80115ad",
        ID.unique(),
        {
          accountId: response.$id,
          isAdmin: false,
          password: "",
          ...dataWithoutPassword,
        },
      );

      return userDoc;
    } catch (error: unknown) {
      throw new Error(getErrorMessage(error) || "Erreur lors de l'inscription");
    }
  },

  async login(data: LoginFormData): Promise<User | LoginErrorMessage> {
    try {
      await account.createEmailPasswordSession(
        data.email,
        data.password
      );
      const accountData = await account.get();

      if (!accountData) return { field: "all", message: "Erreur lors de la connexion" };


      const userDoc = await databases.listDocuments<User>(
        "682c1698002f2b240161",
        "683798040029f80115ad",
        [Query.equal('accountId', accountData.$id)]
      );

      if (userDoc.documents.length === 0) {
        return { field: "all", message: "Identifiant ou mot de passe incorrect" };
      }

      const userData = userDoc.documents[0];
      return userData;

    } catch (error: unknown) {
      throw new Error(getErrorMessage(error) || "Erreur de connexion");
    }
  },

  async logout(): Promise<void> {
    try {
      await account.deleteSession("current");
    } catch (error: unknown) {
      throw new Error(getErrorMessage(error) || "Erreur lors de la déconnexion");
    }
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const accountData = await account.get();

      if (!accountData) return null;


      const userDoc = await databases.listDocuments<User>(
        "682c1698002f2b240161",
        "683798040029f80115ad",
        [Query.equal('accountId', accountData.$id)]
      );

      if (userDoc.documents.length === 0) return null;

      return userDoc.documents[0];
    } catch {
      return null;
    }
  },

  async updateUser(data: UpdateUserFormData): Promise<User> {
    try {
      const DATABASE_ID = "682c1698002f2b240161";
      const COLLECTION_ID = "683798040029f80115ad";

      await account.updateName(`${data.firstname} ${data.lastname}`);
      await account.updateEmail(data.email, data.password);


      const accountData = await account.get();


      const userDocs = await databases.listDocuments<User>(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("accountId", accountData.$id)]
      );
      if (userDocs.documents.length === 0) throw new Error("Utilisateur non trouvé");

      const userDoc = userDocs.documents[0];


      const updatedUser = await databases.updateDocument<User>(
        DATABASE_ID,
        COLLECTION_ID,
        userDoc.$id,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          pseudo: data.pseudo,
          email: data.email,
          phone: data.phone,
          type: data.type,
          ...(data.type === "professional" && { profession: data.profession }),
        }
      );

      return updatedUser;
    } catch (error: unknown) {
      throw new Error(getErrorMessage(error) || "Erreur lors de la mise à jour du compte");
    }
  }
};