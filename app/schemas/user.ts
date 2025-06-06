// schemas/auth.ts
import { z } from "zod";
import { UserType } from "@/interfaces/user";

// Schéma pour l'inscription
export const registerSchema = z
  .object({
    lastname: z.string().min(1, "Nom requis"),
    firstname: z.string().min(1, "Prénom requis"),
    pseudo: z.string().min(2, "Pseudo minimum 2 caractères"),
    email: z.string().email("Email invalide"),
    phone: z
      .string()
      .regex(
        /^0[1-9][0-9]{8}$/,
        "Numéro invalide (10 chiffres, commence par 0)"
      ).
      optional(),
    password: z
      .string()
      .min(8, "Mot de passe minimum 8 caractères")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@~#])[A-Za-z\d@~#]+$/,
        "Mot de passe doit contenir: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@~#)"
      ),
    type: z.nativeEnum(UserType),
    profession: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === UserType.PROFESSIONAL && !data.profession) {
        return false;
      }
      return true;
    },
    {
      message: "La profession est obligatoire pour les professionnels",
      path: ["profession"],
    }
  );

// Schéma pour la connexion
export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(8, "Mot de passe minimum 8 caractères")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@~#])[A-Za-z\d@~#]+$/,
      "Mot de passe doit contenir: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial (@~#)"
    ),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
