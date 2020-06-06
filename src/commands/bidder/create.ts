import sqlDatabase from '../../dataSources/bidder/SqlDatabase';
import logger from '../../utils/logger';
import { SimpleResponse } from '../../types/simpleResponse';

export default async function create(
  dataSource: sqlDatabase,
  email: string,
  password: string,
  isTestRequest: boolean
): Promise<SimpleResponse> {
  try {
    await dataSource.createBidder(email, password, isTestRequest);
    return { success: true };
  } catch (error) {
    logger.error(error);
    return { success: false };
  }
}
