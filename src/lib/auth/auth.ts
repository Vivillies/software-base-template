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
                        // Once the user gets created the bellow 'after' function is called automatically
                        after: async(user) => {
                              // For a better DX we simply create a new stripe customer and assign it to the user automatically,
                              // regardless if the user ends up paying.
                              const customer = await stripe.customers.create({ email: user.email })

                              // Your own database login bellow
                              await database.collection("user")
                                    .updateOne({ _id: new ObjectId(user.id) }, { $set: { hasAccess: false, customerId: customer.id} })
                        }
                  }
            }
      },
      user: {
            additionalFields: {
                  // These fields are used to assign custom fields to the library user object.
                  // We automatically get the type by accessing auth.$Infer.Session.user
                  // The type is already infered at [src/lib/types/user.ts] 
                  // 
                  // Suggested is to only add additional fields to the library user type that are going to be required
                  // for authentication, payments, etc. The rest can be extended with a more complex interface
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