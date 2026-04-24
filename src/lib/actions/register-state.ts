import type { InAppUser } from "../types/in-app-user";

export type RegisterState = {
  success: boolean;
  user: string | null;
  message: string;
  users: InAppUser[];
};
