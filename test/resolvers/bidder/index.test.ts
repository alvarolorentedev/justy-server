const mockCreateBuyer = jest.fn()

jest.mock('../../../src/commands/bidder/create', () => ({
    __esModule: true,
    default: mockCreateBuyer
}))

import resolvers from '../../../src/resolvers/bidder'
import * as faker from "faker"
import { DataSources } from '../../../src/types/DataSources'

describe('buyer resolvers', () => {

    const email = faker.random.uuid()
    const password = faker.random.uuid()
    const dataSources: DataSources = {
        sqlBuyerAPI: faker.random.uuid(),
        sqlBidderAPI: faker.random.uuid()
    }

    beforeAll(() => {
        mockCreateBuyer.mockReset()
    })

    describe('Mutation', () => {
        test('should have create with the call to sqlDatabase with parameters', async () => {
            await resolvers.Mutation.createBidder(undefined, { email, password }, { dataSources, isTestRequest: true })
            expect(mockCreateBuyer).toHaveBeenCalledWith(dataSources.sqlBidderAPI, email, password, true)

        })

    })


})