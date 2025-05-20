import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("682c1305001b99b401d6");

export const account = new Account(client);
export { ID } from "appwrite";
export const databases = new Databases(client);
