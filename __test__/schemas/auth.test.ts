import { describe, it, expect } from "vitest";
import { registerSchema, loginSchema } from "../../app/schemas/user";
import { UserType } from "../../app/interfaces/user";

describe("registerSchema", () => {
    const validData = {
        lastname: "Doe",
        firstname: "John",
        pseudo: "johndoe",
        email: "john@example.com",
        password: "Strong@1A",
        type: UserType.USER,
    };

    it("valide les données utilisateur simples", () => {
        expect(() => registerSchema.parse(validData)).not.toThrow();
    });

    it("rejette un email invalide", () => {
        expect(() =>
            registerSchema.parse({ ...validData, email: "notanemail" })
        ).toThrow();
    });

    it("rejette un mot de passe faible", () => {
        expect(() =>
            registerSchema.parse({ ...validData, password: "weakpass" })
        ).toThrow();
    });

    it("rejette si profession est absente pour les pros", () => {
        expect(() =>
            registerSchema.parse({
                ...validData,
                type: UserType.PROFESSIONAL,
                profession: undefined,
            })
        ).toThrow(/profession/);
    });

    it("accepte un professionnel avec profession", () => {
        expect(() =>
            registerSchema.parse({
                ...validData,
                type: UserType.PROFESSIONAL,
                profession: "Développeur",
            })
        ).not.toThrow();
    });
});

describe("loginSchema", () => {
    it("valide les champs de connexion valides", () => {
        expect(() =>
            loginSchema.parse({
                email: "john@example.com",
                password: "Strong@1A",
            })
        ).not.toThrow();
    });

    it("rejette un email invalide", () => {
        expect(() =>
            loginSchema.parse({ email: "john@", password: "Strong@1A" })
        ).toThrow();
    });

    it("rejette un mot de passe trop faible", () => {
        expect(() =>
            loginSchema.parse({ email: "john@example.com", password: "pass" })
        ).toThrow();
    });
});
