import 'dotenv/config';

export const addNewDesign = async (client, newDesign) => {
        const result = await client.db("u_card").collection("designs").insertOne(newDesign);
        return result
}

export const findDesigns = async (client, database, collection) => {
        const result = await client.db(database).collection(collection).find().limit(20).toArray();
        return result
       
}

export async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

