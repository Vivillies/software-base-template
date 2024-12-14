import { STRIPE_WEBHOOK_SECRET } from "$env/static/private";
import { stripe } from "$lib/stripe";
import { error, json } from "@sveltejs/kit";
import { database } from "$lib/database/database";

export async function POST({ request }) {
      const body: any = await request.text();
      const signature = request.headers.get("stripe-signature") || ""
      let event;

      try {
            event = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);

      } catch (err: any) {
            throw error(400, 'Invalid request')
      }

      switch (event.type) {

            case "invoice.paid": {
                  const email = event.data.object.customer_email as string;
                  await database.collection("user").updateOne(
                        { email: email },
                        { $set: { hasAccess: true } }
                  )
                  break;
            }

            case "invoice.payment_failed": {
                  const customerId: any = event.data.object.customer;
                  await database.collection("user").updateOne(
                        { customerId: customerId },
                        { $set: { hasAccess: false } }
                  )
            }


            default: {
                  console.log(event.type)
                  break;
            }

      }

      return json({})
}