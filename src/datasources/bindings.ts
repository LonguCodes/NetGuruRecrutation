import {Db, MongoClient} from "mongodb";
import {BindingKey} from "../core/context/context";
import {AxiosInstance} from "axios";

export namespace DatasourceBindings {
    export const Mongo = new BindingKey<Db>();
    export const MongoClient = new BindingKey<MongoClient>();
    export const Axios = new BindingKey<AxiosInstance>();
}