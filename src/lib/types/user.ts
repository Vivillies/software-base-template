import { auth } from "$lib/auth/auth";

type AuthUserType = typeof auth.$Infer.Session.user;

export interface User extends AuthUserType {
      customerId: string;
}