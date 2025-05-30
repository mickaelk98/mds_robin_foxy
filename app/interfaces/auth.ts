import { User } from "@/app/interfaces/user";

export interface AuthState {
  user: User | null;
  isLoading: boolean;

  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  initializeAuth: () => void;
}


export interface LoginErrorMessage {
  field: string;
  message: string;
}