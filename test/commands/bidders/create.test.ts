const mockErrorLogger = jest.fn()

jest.mock('../../../src/utils/logger', () => ({
    __esModule: true,
    default: {
        error: mockErrorLogger
    }
}))

import create from "../../../src/commands/bidders/create"
import * as faker from "faker"

describe('create buyer', () => {
    const sqlDataSource = {
        createBidder: jest.fn(),
    }

    describe('create buyer correctly', () =>{
        let result
        const email = faker.random.uuid()
        const password = faker.random.uuid() 
        const isTestRequest = false 

        beforeAll(async () => {
            sqlDataSource.createBidder.mockReset()
            sqlDataSource.createBidder.mockResolvedValue(undefined)
            //@ts-ignore
            result = await create(sqlDataSource, email, password, isTestRequest)
        })

        test('should call database', () => {
            expect(sqlDataSource.createBidder).toHaveBeenCalledWith(email, password, isTestRequest)
        })        
        
        test('should return success response with expected id', () => {
            expect(result).toEqual({success: true})
        })
        
    })    
    
    describe('error creating buyer', () => {
        let result
        const expectedError = faker.random.uuid()
        const email = faker.random.uuid()
        const password = faker.random.uuid() 
        const isTestRequest = false 

        beforeAll(async () => {
            sqlDataSource.createBidder.mockReset()
            mockErrorLogger.mockReset()
            sqlDataSource.createBidder.mockRejectedValue(expectedError)
            //@ts-ignore
            result = await create(sqlDataSource, email, password, isTestRequest)
        })
        test('should call database', () => {
            expect(sqlDataSource.createBidder).toHaveBeenCalledWith(email, password, isTestRequest)
        })        
        
        test('should call error logger with error', () => {
            expect(mockErrorLogger).toHaveBeenCalledWith(expectedError)
        })        
        
        test('should return success response with expected id', () => {
            expect(result).toEqual({success: false})
        })
        
    })
})