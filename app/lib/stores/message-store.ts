import { create } from "zustand";
import type { Message } from "@/app/interfaces/message";



interface MessageState {
    messages: Message[];
    setMessages: (messages: Message[]) => void;
    addMessage: (message: Message) => void;
    clearMessages: () => void;
}

export const useMessageStore = create<MessageState>((set, get) => ({
    messages: [],

    setMessages: (messages) => set({ messages }),

    addMessage: (message) => {
        const currentMessages = get().messages;
        const exists = currentMessages.some(msg => msg.$id === message.$id);

        if (!exists) {
            console.log("Nouveau message ajouté:", message.content);
            set((state) => ({
                messages: [...state.messages, message]
            }));
        } else {
            console.log("Message déjà existant, ignoré:", message.$id);
        }
    },

    clearMessages: () => set({ messages: [] }),
}));
