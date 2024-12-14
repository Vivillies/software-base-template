import { json } from "@sveltejs/kit";
import { stripe } from "$lib/stripe";
import { URL } from "$env/static/private";

export async function GET({ url }) {
      try {
            const priceId = url.searchParams.get("priceId") as string;
            const customerId = url.searchParams.get("customerId") as string;

            const checkout = await stripe.checkout.sessions.create({
                  line_items: [
                        {
                              price: priceId,
                              quantity: 1,
                        },
                  ],
                  payment_method_types: ["card", "paypal"],
                  mode: 'subscription',
                  success_url: `${URL}/dashboard`,
                  customer: customerId
            });

            return json({checkout: checkout})

      }
      catch (error) {
            return json({error: `There was an error while trying to create a checkout session ${error}`})
      }
}