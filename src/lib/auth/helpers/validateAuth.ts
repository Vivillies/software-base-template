import { auth } from "$lib/auth/auth";
import { redirect } from "@sveltejs/kit";

/**
 * @description Using `auth.api` to retrieve the current session
 * @param headers - Application headers
 * @returns session => Session | null
 */
export async function sessionInvalid(headers: Headers): Promise<boolean>{
      const session = await auth.api.getSession({headers: headers})
      return session === null
}

/**
 * @description Check if the user has access to the product
 * @param headers - Application headers
 * @returns boolean
 */
export async function hasProductAccess(headers: Headers): Promise<boolean>{
      const session = await auth.api.getSession({headers: headers});
      const userHasAccess = session?.user.hasAccess as boolean;

      return userHasAccess
}