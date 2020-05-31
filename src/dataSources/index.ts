import { DataSource } from "apollo-datasource"
import SqlByerDatabase from './SqlBuyerDatabase'
import { DataSources } from "../types/DataSources"

let sqlAPIConfig: any = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: ['salesforce', 'public'],
    wrapIdentifier: (value) => value
}

if(process.env.NODE_ENV !== 'production')
    sqlAPIConfig = {
        client: "sqlite3",
        connection: {
            filename: "./local.sqlite"
        },
        useNullAsDefault: true
    }

const sqlBuyerAPI = new SqlByerDatabase(sqlAPIConfig) as DataSource

export default {
    sqlBuyerAPI
} as DataSources