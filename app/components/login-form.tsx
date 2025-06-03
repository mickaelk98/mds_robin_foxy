"use client";

import { loginSchema } from "@/app/schemas/user"
import { LoginData } from "@/app/interfaces"
import { useState } from "react";
import { authService } from "@/app/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/app/lib/stores/auth-store";
import Link from "next/link";
import getErrorMessage from "@/app/lib/error-handler";

export function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const { setUser } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginData) => {
        setIsLoading(true);
        setError('');

        try {
            const result = await authService.login(data);

            // Vérifier si c'est une erreur
            if (result && typeof result === 'object' && 'field' in result) {
                setError(result.message);
            } else {

                console.log('Connexion réussie:', result);
                setUser(result);

            }
        } catch (err: unknown) {
            setError(getErrorMessage(err) || 'Erreur de connexion');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4 w-full max-w-[500px] mx-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Connexion</h2>

            {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    {...register('email')}
                    className="w-full border-b border-[var(--border)] outline-none"

                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Mot de passe</label>
                <input
                    type="password"
                    {...register('password')}
                    className="w-full border-b border-[var(--border)] outline-none"

                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <button
                    type="submit"
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                    className="w-full max-w-[150px]  bg-[var(--border)] hover:bg-[var(--green-200)] rounded-[20px] py-2 px-4 cursor-pointer"
                >
                    {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
                <p >Vous n&apos;avez pas encore de compte ? <span className="font-semibold"><Link href="/signup">Inscrivez vous ici</Link></span></p>
            </div>
        </div>
    );
}