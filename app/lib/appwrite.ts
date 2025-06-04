import { Client, Account, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint(`${process.env.APPWRITE_ENDPOINT}`)
  .setProject(`${process.env.APPWRITE_PROJECTID}`);

export const account = new Account(client);
export { ID } from "appwrite";
export const databases = new Databases(client);
