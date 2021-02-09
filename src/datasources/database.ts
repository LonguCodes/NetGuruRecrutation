import {MongoClient} from "mongodb";


const dbName = 'NetGuru';
const url = `mongodb://database`;


export async function createDatabaseConnection() {
    const client = new MongoClient(url, {useUnifiedTopology: true});

    await client.connect();
    console.log('Connected successfully to database');

    return client.db(dbName);
}