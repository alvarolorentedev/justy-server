import sqlBuyerDatabase from '../../dataSources/buyer/SqlDatabase';
import { SimpleResponse } from '../../types/simpleResponse';

export default async function loginBuyer(
  dataSource: sqlBuyerDatabase,
  email: string,
  password: string,
  isTestRequest: boolean
): Promise<SimpleResponse> {
  throw Error("Not Implemented");

}
