import sqlDatabase from "../../dataSources/SqlDatabase"
import logger from '../../utils/logger'
import { SimpleResponse } from '../../types/simpleResponse'

export default async function createBuyer(dataSource: sqlDatabase, email: string, password: string): Promise<SimpleResponse> {

    return { success: true }
    // try {
    //     await dataSource.createBuyer(email, password)
    //     return { success: true }
    // } catch (error) {
    //     logger.error(error)
    //     return { success: false }
    // }
}