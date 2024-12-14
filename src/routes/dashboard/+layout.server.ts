import { sessionInvalid, hasProductAccess } from "$lib/auth/helpers/validateAuth";
import { redirect } from "@sveltejs/kit";

export async function load({request}){
      if (await sessionInvalid(request.headers)) {
            return redirect(302, "/auth")
      }
}