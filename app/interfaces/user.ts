// Enum avec valeurs string (recommandé)
export enum UserType {
  USER = "user",
  PROFESSIONAL = "professional",
}

// Interface de base commune
interface BaseUser {
  id?: string;
  lastname: string;
  firstname: string;
  pseudo: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginData extends BaseUser {
  password: string;
  type: UserType;
  profession?: string;
}

export interface RegisterData {
  email: string;
  password: string;
}

export interface RegularUser extends BaseUser {
  type: UserType.USER;
  profession?: never;
}

export interface ProfessionalUser extends BaseUser {
  type: UserType.PROFESSIONAL;
  profession: string;
}

// Union type pour représenter tous les utilisateurs
export type User = RegularUser | ProfessionalUser;
