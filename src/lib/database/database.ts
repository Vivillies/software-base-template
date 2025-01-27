import { MONGODB_URI, DATABASE_NAME } from "$env/static/private";
import type { User } from "$lib/types/user";
import { Collection, MongoClient } from "mongodb";

const client: MongoClient = new MongoClient(MONGODB_URI);
const database = client.db(DATABASE_NAME)

const userCollection = database.collection("user") as Collection<User>

export { client, database, userCollection }