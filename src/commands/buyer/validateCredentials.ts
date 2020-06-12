import sqlBuyerDatabase from '../../dataSources/buyer/SqlDatabase';
import logger from '../../utils/logger';
import { SimpleResponse } from '../../types/simpleResponse';

export default async function validateCredentials(
  dataSource: sqlBuyerDatabase,
  email: string,
  password: string
): Promise<SimpleResponse> {
  try {
    await dataSource.validateCredentials(email, password);
    return { success: true };
  } catch (error) {
    logger.error(error);
    return { success: false };
  }
}
