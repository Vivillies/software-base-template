import { auth } from "$lib/auth/auth"; 
import { svelteKitHandler } from "better-auth/svelte-kit";

export async function handle({ event, resolve }) {
      // Bellow handler is used for the authentication library. It is not suggested to remove it!
      return svelteKitHandler({ event, resolve, auth });
}