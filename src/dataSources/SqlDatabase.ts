/// <reference types="../../types/index" />
import { SQLDataSource } from "datasource-sql"

export default class sqlDatabase extends SQLDataSource {
    constructor(config: any){
        super(config)
    }

    public async createBuyer(email: string, password: string): Promise<void> {
        throw "Not Implemented";
        
    }
    

}