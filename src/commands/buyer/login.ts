import sqlBuyerDatabase from '../../dataSources/buyer/SqlDatabase';
import logger from '../../utils/logger';
import { SimpleResponse } from '../../types/simpleResponse';

export default async function loginBuyer(
  dataSource: sqlBuyerDatabase,
  email: string,
  password: string,
  isTestRequest: boolean
): Promise<SimpleResponse> {
  try {
    await dataSource.loginBuyer(email, password, isTestRequest);
    return { success: true };
  } catch (error) {
    logger.error(error);
    return { success: false };
  }
}
