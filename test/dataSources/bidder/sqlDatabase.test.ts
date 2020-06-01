import sqlDatabase from '../../../src/dataSources/bidder/SqlDatabase'
import * as faker from "faker"
import { compare } from "bcrypt"

describe('sqlDatabase', () => {
    const config = {
        client: "sqlite3",
        connection: {
            filename: ":memory:"
        },
        useNullAsDefault: true
    }
    let subject = new sqlDatabase(config)
    beforeAll(async () => {
        await subject.db.schema.createTable('BIDDERS', (table) => {
            table.string("id", 36).notNullable().primary()
            table.string("email", 256).notNullable().unique()
            table.string("password", 60).notNullable()
            table.integer("isTest", 60).notNullable().defaultTo(0)
          })
    })

    afterAll(() => {
        subject.db.destroy()
    })

    describe('generates buyer correctly', () => {
        

        test('should create a test user correctly', async () => {
            const buyerPassword: string = faker.internet.password()
            const buyerEmail: string = faker.internet.email()
            await subject.createBidder(buyerEmail, buyerPassword, true)
            const result = await getBuyerbyEmail(buyerEmail)
            expect(result).not.toBeUndefined()
            expect(result.email).toEqual(buyerEmail)
            expect(result.isTest).toEqual(1)
            expect(await compare(buyerPassword, result.password)).toBeTruthy()
        });
        
        test('should create a normal user correctly', async () => {
            const buyerPassword: string = faker.internet.password()
            const buyerEmail: string = faker.internet.email()
            await subject.createBidder(buyerEmail, buyerPassword, false)
            const result = await getBuyerbyEmail(buyerEmail)
            expect(result).not.toBeUndefined()
            expect(result.email).toEqual(buyerEmail)
            expect(result.isTest).toEqual(0)
            expect(await compare(buyerPassword, result.password)).toBeTruthy()
        });
    })

    const getBuyerbyEmail = async (email: String): Promise<any> => {
        const queryResult = (await subject.db
            .select('*')
            .from('BIDDERS')
            .where({ email }))[0]
        return queryResult
    }

})