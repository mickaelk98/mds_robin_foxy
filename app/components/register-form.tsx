"use client";

import { registerSchema } from "@/app/schemas/user"
import { RegisterData, } from "@/app/interfaces"
import { UserType } from "@/app/interfaces/user";
import { useState } from "react";
import { authService } from "@/app/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";



export function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [selectedUserType, setSelectedUserType] = useState<UserType>(UserType.USER);
    const router = useRouter();


    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            type: UserType.USER,
            isAdmin: false
        }
    });

    // Surveiller le type d'utilisateur
    const userType = watch('type');

    // Gérer le changement de type d'utilisateur
    const handleUserTypeChange = (type: UserType) => {
        setSelectedUserType(type);
        setValue('type', type);

        // Réinitialiser la profession si on repasse en utilisateur normal
        if (type === UserType.USER) {
            setValue('profession', undefined);
        }
    };

    const onSubmit = async (data: RegisterData) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            console.log('data:', data);

            const user = await authService.register(data);

            setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            console.log('Utilisateur créé:', user);
            router.push('/login');

        } catch (err: any) {
            setError(err.message || 'Erreur lors de l\'inscription');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Inscription</h2>

            {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            {success && (
                <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    {success}
                </div>
            )}

            {/* Type d'utilisateur */}
            <div>
                <label className="block text-sm font-medium mb-2">Type de compte</label>
                <div className="flex space-x-2">
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange(UserType.USER)}
                        className={`flex-1 py-2 px-4 rounded-md border ${selectedUserType === UserType.USER
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        Utilisateur
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUserTypeChange(UserType.PROFESSIONAL)}
                        className={`flex-1 py-2 px-4 rounded-md border ${selectedUserType === UserType.PROFESSIONAL
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        Professionnel
                    </button>
                </div>
                <input type="hidden" {...register('type')} />
            </div>

            {/* Informations personnelles */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Nom</label>
                    <input
                        type="text"
                        {...register('lastname')}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre nom"
                    />
                    {errors.lastname && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Prénom</label>
                    <input
                        type="text"
                        {...register('firstname')}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre prénom"
                    />
                    {errors.firstname && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Pseudo</label>
                <input
                    type="text"
                    {...register('pseudo')}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre pseudo"
                />
                {errors.pseudo && (
                    <p className="text-red-500 text-sm mt-1">{errors.pseudo.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    {...register('email')}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="votre@email.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Téléphone (optionnel)</label>
                <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0123456789"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>

            {/* Champ profession conditionnel */}
            {selectedUserType === UserType.PROFESSIONAL && (
                <div>
                    <label className="block text-sm font-medium mb-1">Profession *</label>
                    <input
                        type="text"
                        {...register('profession')}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre profession"
                    />
                    {errors.profession && (
                        <p className="text-red-500 text-sm mt-1">{errors.profession.message}</p>
                    )}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium mb-1">Mot de passe</label>
                <input
                    type="password"
                    {...register('password')}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                    Minimum 8 caractères avec 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@~#)
                </p>
            </div>

            {/* Champ isAdmin caché avec valeur par défaut */}
            <input type="hidden" {...register('isAdmin')} value="false" />

            <button
                type="submit"
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Inscription...' : 'S\'inscrire'}
            </button>
        </div>
    );
}