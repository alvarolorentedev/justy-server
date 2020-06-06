import create from '../../commands/buyer/create';
import BuyerResolver from '../../types/BuyerResolver';

export default {
  Query: {},
  Mutation: {
    createBuyer: async (
      _,
      { email, password }: { email: string; password: string },
      {
        dataSources,
        isTestRequest,
      }: { dataSources: any; isTestRequest: boolean }
    ) => await create(dataSources.sqlBuyerAPI, email, password, isTestRequest),
  },
} as BuyerResolver;
