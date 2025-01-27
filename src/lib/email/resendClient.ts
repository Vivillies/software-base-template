import { RESEND_API_KEY } from "$env/static/private";
import { Resend } from "resend";

export const resend = new Resend(RESEND_API_KEY);

export async function sendEmail(from: string, to: string[], subject: string, html: string){
      const { data, error } = await resend.emails.send({
            from: from,
            to: to,
            subject: subject,
            html: html
      })

      if (error) {
            return console.error({ error });
      }

      console.log({ data });
}