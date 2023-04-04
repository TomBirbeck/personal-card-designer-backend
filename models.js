import { MongoClient } from 'mongodb';
import 'dotenv/config';
const client = new MongoClient(process.env.CONNECTION_URI);

export const addNewDesign = async (client, newDesign) => {
    try {
        const result = await client.db("u_card").collection("designs").insertOne(newDesign);
        return result
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


export async function findOne(client, database, collection) {
    try {
        const result = await client.db(database).collection(collection).findOne();
        if (result) {
            return result
        } else {
            console.log(`No listings found in ${database}`);
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
