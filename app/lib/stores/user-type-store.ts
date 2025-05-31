// lib/stores/auth-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "@/app/interfaces/user";

type UserTypeStore = {
    userType: UserType;
    // setUserType: (userType: UserType) => void;
    changeUserType: () => void;
};

export const useUsertypeStore = create<UserTypeStore>()(
    persist(
        (set, get) => ({
            userType: UserType.PROFESSIONAL,
            // setUserType: (userType) => set({ userType }),
            changeUserType: () => {
                const currentUserType = get().userType;
                set({
                    userType: currentUserType === UserType.USER
                        ? UserType.PROFESSIONAL
                        : UserType.USER
                });
            },
        }),
        {
            name: "user-type-storage",
        }
    )
);