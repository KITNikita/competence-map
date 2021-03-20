export class User {
  name: string;
  email: string;
  groups?: string[];
}

export enum UserRole {
  ADMIN = 'Admin', EXPERT = 'Expert'
}
