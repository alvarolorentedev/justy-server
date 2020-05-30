/// <reference types="../../types/index" />
import { v4 } from "uuid"
import { SQLDataSource } from "datasource-sql"

export default class sqlDatabase extends SQLDataSource {
    constructor(config: any){
        super(config)
    }

    public async createBuyer(email: string, password: string): Promise<void> {
        const id = v4()
        await this.db.insert({ id, email, password }).into('BUYERS')
    }
    
    

}