import { create } from 'zustand';
import type { Files } from '@/app/interfaces/files';
import { usersService } from '@/app/services/files';


interface FileStore {
    files: Files[];
    isLoading: boolean;
    error: string | null;
    fetchFiles: () => Promise<void>;
}

export const useFileStore = create<FileStore>((set) => ({
    files: [],
    isLoading: false,
    error: null,
    fetchFiles: async () => {
        try {
            set({ isLoading: true, error: null });
            const files = await usersService.getAllfiles();
            set({ files, isLoading: false });
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : "Une erreur est survenue",
                isLoading: false
            });
        }
    }
})); 