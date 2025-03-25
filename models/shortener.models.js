import { dbclient } from "../config/db-client.js";
import { env } from "../config/env.js";
const db = dbclient.db(env.MONGODB_DATABASE_NAME);
const shortenerCollection = db.collection("shorteners");
export const Loadlinks = async () => {
  return shortenerCollection.find().toArray();
};
export const savelinks = async (link) => {
  return shortenerCollection.insertOne(link);
};
export const getlinksbyshortcode = async (shortcode) => {
  return shortenerCollection.findOne({ shortCode: shortcode });
};
