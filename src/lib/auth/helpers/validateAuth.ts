import { auth } from "$lib/auth/auth";

/**
 * @description 
 * Check if the user is logged in or not. Suggested is to use this helper function when
 * it comes to route access control.
 * 
 * @returns 
 * true or false
 */
export async function isLoggedIn(headers: Headers): Promise<boolean>{
      const session = await auth.api.getSession({headers: headers})
      return session !== null
}