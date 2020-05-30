const mockCreateBuyer = jest.fn()

jest.mock('../../src/commands/buyers/create', () => ({
    __esModule: true,
    default: mockCreateBuyer
}))

import resolvers from '../../src/resolvers/buyer'
import * as faker from "faker"

describe('buyer resolvers', () => {

    const email = faker.random.uuid()
    const password = faker.random.uuid()
    const dataSources = {
        sqlAPI: faker.random.uuid()
    }

    beforeAll(() => {
        mockCreateBuyer.mockReset()
    })

    describe('Mutation', () => {
        test('should have create with the call to sqlDatabase with parameters', async () => {
            await resolvers.Mutation.createBuyer(undefined, { email, password }, { dataSources })
            expect(mockCreateBuyer).toHaveBeenCalledWith(dataSources.sqlAPI, email, password)

        })

    })


})