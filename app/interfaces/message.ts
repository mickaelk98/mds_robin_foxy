import type { Models } from "appwrite";

export interface Message extends Models.Document {
    id: string;
    forumId: string;
    userId: string;
    content: string;
}