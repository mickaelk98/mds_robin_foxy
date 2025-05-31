"use client";

import { registerSchema } from "@/app/schemas/user"
import { RegisterData, } from "@/app/interfaces"
import { UserType } from "@/app/interfaces/user";
import { useState } from "react";
import { authService } from "@/app/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useUsertypeStore } from "@/app/lib/stores/user-type-store";
import Link from "next/link";
import Image from "next/image";
import proIcon from "@/app/assets/pro-icon.png";
import otherIcon from "@/app/assets/other-icon.png";


export function RegisterDesktopForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const router = useRouter();
    const { userType, changeUserType } = useUsertypeStore();


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            type: UserType.USER,
            isAdmin: false
        }
    });



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
        <div className="relative bg-white rounded-[50px] p-4 w-[90%] max-w-[900px] mx-auto hidden md:flex my-20">
            <h2 className="absolute -top-4 left-[75%] translate-x-[-50%] text-2xl uppercase font-bold mb-4 text-center bg-[var(--green-200)] px-4 py-2 border border-white">s&apos;inscrire</h2>

            <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                    <Image src={proIcon} alt="icon pro" width={250} height={200} />
                    <button className={`font-bold cursor-pointer ${userType === UserType.PROFESSIONAL ? "bg-[var(--green-200)] py-2 px-2 rounded-[10px]" : ""}`} onClick={() => changeUserType()}>Professionnel</button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Image src={otherIcon} alt="icon autre" width={200} height={200} />
                    <button className={`font-bold cursor-pointer ${userType === UserType.USER ? "bg-[var(--green-200)] py-2 px-2 rounded-[10px]" : ""}`} onClick={() => changeUserType()}>Autre</button>
                </div>
            </div>

            <div className="space-y-4 w-[70%]">

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



                {/* Informations personnelles */}
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nom</label>
                        <input
                            type="text"
                            {...register('lastname')}
                            className="w-full border-b border-[var(--border)] outline-none"
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
                            className="w-full border-b border-[var(--border)] outline-none"

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
                        className="w-full border-b border-[var(--border)] outline-none"

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
                        className="w-full border-b border-[var(--border)] outline-none"

                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Téléphone</label>
                    <input
                        type="tel"
                        {...register('phone')}
                        className="w-full border-b border-[var(--border)] outline-none"

                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                {/* Champ profession conditionnel */}
                {userType === UserType.PROFESSIONAL && (
                    <div>
                        <label className="block text-sm font-medium mb-1">Profession </label>
                        <input
                            type="text"
                            {...register('profession')}
                            className="w-full border-b border-[var(--border)] outline-none"

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
                        className="w-full border-b border-[var(--border)] outline-none"

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

                <div className="flex flex-col gap-4 justify-center items-center">
                    <button
                        type="submit"
                        disabled={isLoading}
                        onClick={handleSubmit(onSubmit)}
                        className="w-full max-w-[100px]  bg-[var(--border)] hover:bg-[var(--green-200)] rounded-[20px] py-2 px-4 cursor-pointer"
                    >
                        {isLoading ? 'Inscription...' : 'S\'inscrire'}
                    </button>
                    <p >Vous avez déjà un compte ? <span className="font-semibold"><Link href="/login">Connectez-vous ici</Link></span></p>
                </div>
            </div>
        </div>
    );
}