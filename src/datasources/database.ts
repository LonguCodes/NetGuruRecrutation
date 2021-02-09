import {MongoClient} from "mongodb";


const url = 'mongodb://172.17.0.2:27017';
const dbName = 'NetGuru';


export async function createDatabaseConnection() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    await client.connect();
    console.log('Connected successfully to database');

    return client.db(dbName);
}