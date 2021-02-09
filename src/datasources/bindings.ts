import {Db} from "mongodb";
import {BindingKey} from "../core/context/context";
import {AxiosInstance} from "axios";

export namespace DatasourceBindings {
    export const Mongo = new BindingKey<Db>();
    export const Axios = new BindingKey<AxiosInstance>();
}