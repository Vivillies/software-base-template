import { ObjectId } from "mongodb";
import { database } from "$lib/database/database";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from "$env/static/private";
import { stripe } from "$lib/stripe";

import { admin } from "better-auth/plugins";

export const auth = betterAuth({
      database: mongodbAdapter(database),
      databaseHooks: {
            user: {
                  create: {
                        // Bellow logic gets executed once the user is created.
                        after: async(user) => {
                              const customer = await stripe.customers.create({
                                    email: user.email
                              })
                              await database.collection("user").updateOne(
                                    { _id: new ObjectId(user.id) },
                                    { $set: { 
                                          hasAccess: false, 
                                          customerId: customer.id
                                    } }
                              )
                        }
                  }
            }
      },
      user: {
            additionalFields: {
                  hasAccess: { type: "boolean", defaultValue: false, required: true, fieldName: "hasAccess" },
                  customerId: { type: "string", defaultValue: null, required: true, fieldName: "customerId" },
            }
      },
      socialProviders: {
            google: {
                  clientId: AUTH_GOOGLE_ID,
                  clientSecret: AUTH_GOOGLE_SECRET
            }
      },
      plugins: [admin()]
})