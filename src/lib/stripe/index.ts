import { STRIPE_SECRET_KEY } from "$env/static/private";

import Stripe from "stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-11-20.acacia" })

export { stripe };