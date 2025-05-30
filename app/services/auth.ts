// services/auth.ts
import { account, ID, databases } from "@/app/lib/appwrite";
import { Query } from "appwrite";
import type { RegisterFormData, LoginFormData } from "@/app/schemas/index";
import type { User, LoginErrorMessage } from "@/app/interfaces";

export const authService = {
  async register(data: RegisterFormData): Promise<User> {
    try {
      const response = await account.create(
        ID.unique(),
        data.email,
        data.password,
        `${data.firstname} ${data.lastname}`
      );

      // Typer explicitement comme User
      const userDoc = await databases.createDocument<User>(
        "682c1698002f2b240161",
        "683798040029f80115ad",
        ID.unique(),
        {
          accountId: response.$id,
          ...data,
        },
      );

      return userDoc;
    } catch (error: any) {
      throw new Error(error.message || "Erreur lors de l'inscription");
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

    } catch (error: any) {
      throw new Error(error.message || "Erreur de connexion");
    }
  },

  async logout(): Promise<void> {
    try {
      await account.deleteSession("current");
    } catch (error: any) {
      throw new Error(error.message || "Erreur lors de la déconnexion");
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
};