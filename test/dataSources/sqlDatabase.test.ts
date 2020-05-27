import sqlDatabase from '../../src/dataSources/SqlDatabase'

describe('sqlDatabase', () => {
    const config = {
        client: "sqlite3",
        connection: {
            filename: ":memory:"
        }
    }
    let subject = new sqlDatabase(config)
    beforeAll(async () => {
        await subject.db.schema.createTable('GAME', (table) => {
            table.string("id", 36)
            table.text("status")
          })
    })

    afterAll(() => {
        subject.db.destroy()
    })

    test('should do', () => {
        
    });

})