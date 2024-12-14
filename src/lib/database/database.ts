import { MONGODB_URI, DATABASE_NAME } from "$env/static/private";
import { Collection, MongoClient, type Document } from "mongodb";

const client: MongoClient = new MongoClient(MONGODB_URI);
const database = client.db(DATABASE_NAME)

export { client, database }