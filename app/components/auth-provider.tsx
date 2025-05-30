'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/app/lib/stores/auth-store';


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const initializeAuth = useAuthStore((state) => state.initializeAuth);
    const { user } = useAuthStore();

    console.log('user:', user);

    useEffect(() => {
        // Initialiser l'auth au démarrage de l'app
        initializeAuth();
    }, [initializeAuth]);

    return <>{children}</>;
}