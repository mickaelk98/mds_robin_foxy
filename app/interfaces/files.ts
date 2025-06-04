import type { Models } from "appwrite"


export interface Files extends Models.Document {
    title: string;
    url: string;
    target: string;
}