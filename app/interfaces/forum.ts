import type { Models } from "appwrite"

export interface Forum extends Models.Document {
    id: string;
    title: string;
    description: string;
    image: string;
}