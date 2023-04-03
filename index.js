import { MongoClient } from 'mongodb';
import 'dotenv/config';

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

const main = async () => {

    const client = new MongoClient(process.env.CONNECTION_URI);
    
    try {
        await client.connect();
        await listDatabases(client);
    
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
    

}

main().catch(console.error);