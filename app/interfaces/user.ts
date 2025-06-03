import type { Models } from "appwrite"


export enum UserType {
  USER = "user",
  PROFESSIONAL = "professional",
}

// Interface de base commune
interface BaseUser {
  id?: string;
  accountId?: string;
  lastname: string;
  firstname: string;
  pseudo: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateUserFormData {
  firstname: string;
  lastname: string;
  pseudo: string;
  password: string;
  email: string;
  phone?: string;
  type: UserType;
  profession?: string; // Pour les professionnels
}

export interface RegisterData extends BaseUser {
  password: string;
  type: UserType;
  profession?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegularUser extends Models.Document {
  id?: string;
  accountId?: string;
  lastname: string;
  firstname: string;
  pseudo: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  type: UserType.USER;
  profession?: never;
}

export interface ProfessionalUser extends Models.Document {
  id?: string;
  accountId?: string;
  lastname: string;
  firstname: string;
  pseudo: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  type: UserType.PROFESSIONAL;
  profession: string;
}

// Union type pour représenter tous les utilisateurs
export type User = RegularUser | ProfessionalUser;
