import {MongoClient} from "mongodb";
import {GlobalContext} from "../core/context/global";
import {DatasourceBindings} from "./bindings";
import {getDbName} from "./database.config";


const url = `mongodb://172.20.0.2`;


export async function createDatabaseConnection() {

    const client = new MongoClient(url, {useUnifiedTopology: true});

    await client.connect();
    const db = client.db(getDbName());
    GlobalContext.get()?.bind(DatasourceBindings.Mongo, db);
    GlobalContext.get()?.bind(DatasourceBindings.MongoClient, client);
    return db;
}