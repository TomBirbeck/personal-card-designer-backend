import { MongoClient } from 'mongodb';
import 'dotenv/config';
const client = new MongoClient(process.env.CONNECTION_URI);

export const addNewDesign = async (newDesign) => {
    try {
        await client.connect()
        const result = await client.db("u_card").collection("designs").insertOne(newDesign);
        return result
    } catch(e) {
        console.error(e);
    }
}

export const findDesigns = async (database, collection) => {
    try {
        await client.connect()
        const result = await client.db(database).collection(collection).find().limit(20).toArray();
        if (result) {
            return result
        } 
        } catch (e) {
            console.error(e);
        } 
}
