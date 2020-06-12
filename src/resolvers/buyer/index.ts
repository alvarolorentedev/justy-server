import create from '../../commands/buyer/create';
import login from '../../commands/buyer/login';
import BuyerResolver from '../../types/BuyerResolver';
import { DataSources } from '../../types/DataSources';

export default ({
  Query: {},
  Mutation: {
    createBuyer: async (
      _,
      { email, password }: { email: string; password: string },
      {
        dataSources,
        isTestRequest,
      }: { dataSources: DataSources; isTestRequest: boolean }
    ) => await create(dataSources.sqlBuyerAPI, email, password, isTestRequest),    
    loginBuyer: async (
      _,
      { email, password }: { email: string; password: string },
      {
        dataSources,
        isTestRequest,
      }: { dataSources: DataSources; isTestRequest: boolean }
    ) => await login(dataSources.sqlBuyerAPI, email, password, isTestRequest),
  },
} as unknown) as BuyerResolver;
