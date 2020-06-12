import create from '../../commands/buyer/create';
import validateCredentials from '../../commands/buyer/validateCredentials';
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
    validateCredentialsBuyer: async (
      _,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: DataSources }
    ) => await validateCredentials(dataSources.sqlBuyerAPI, email, password),
  },
} as unknown) as BuyerResolver;
