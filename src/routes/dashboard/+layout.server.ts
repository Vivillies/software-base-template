import { isLoggedIn } from "$lib/auth/helpers/validateAuth";
import { redirect } from "@sveltejs/kit";

export async function load({request}){
      if (!await isLoggedIn(request.headers)) {
            return redirect(302, "/auth")
      }
}