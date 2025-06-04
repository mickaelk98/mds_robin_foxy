export type MessageRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
    role: MessageRole;
    content: string;
}

export interface ChatResponse {
    reply: string;
    error?: string;
} 