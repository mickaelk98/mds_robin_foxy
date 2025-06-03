import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthStore } from '@/app/lib/stores/auth-store';

export function RequireAuth({ children }: { children: React.ReactNode }) {
    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    useEffect(() => {
        if (user === undefined) return; // le store charge encore ?
        if (!user) {
            router.replace('/'); // pas connecté → vers login
        }
    }, [user, router]);

    if (!user) return null; // optionnel: tu peux afficher un loader ici
    return <>{children}</>;
}