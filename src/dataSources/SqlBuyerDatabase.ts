/// <reference types="../../types/index" />
import { v4 } from "uuid"
import { SQLDataSource } from "datasource-sql"
import { hash } from "bcrypt"

export default class SqlBuyerDatabase extends SQLDataSource {
    saltRounds = 10;

    constructor(config: any){
        super(config)
    }

    public async createBuyer(email: string, password: string, isTestRequest: boolean): Promise<void> {
        const id = v4()
        const hashPassword = await hash(password, this.saltRounds)
        await this.db.insert({ id, email, password: hashPassword, isTest: isTestRequest? 1 : 0 }).into('BUYERS')
    }

}