import type { auth } from "$lib/auth/auth";
import { createAuthClient } from "better-auth/svelte";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { adminClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
      baseURL: "http://localhost:5173",
      plugins: [
            inferAdditionalFields<typeof auth>(), 
            adminClient()
      ]
})

export const { signIn, signUp, signOut, useSession } = authClient;