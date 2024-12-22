/**
 * This file can be edited to fit your own needs.
 * Please be mindful when making changes to this file as it is being used
 * in multiple files, especially for authentication and authorization purposes.
 * src/lib/auth/auth.ts
 */ 

import { MONGODB_URI, DATABASE_NAME } from "$env/static/private";
import { MongoClient } from "mongodb";

const client: MongoClient = new MongoClient(MONGODB_URI);
const database = client.db(DATABASE_NAME)

export { client, database }