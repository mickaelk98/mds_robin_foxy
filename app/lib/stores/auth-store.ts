// lib/stores/auth-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "@/app/interfaces";
import { authService } from "@/app/services/auth"

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      setUser: (user) => set({ user }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null }),
      initializeAuth: async () => {
        set({ isLoading: true });
        try {
          const user = await authService.getCurrentUser();
          set({ user, isLoading: false });
        } catch (error) {
          console.error('Auth initialization erreur:', error);
          set({ user: null, isLoading: false });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
