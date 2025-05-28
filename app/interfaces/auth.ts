import { User } from "@/app/interfaces/user";

export interface AuthState {
  user: User | null;
  isLoading: boolean;
}
