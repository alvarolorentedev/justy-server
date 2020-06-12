import create from '../../commands/bidder/create';
import BidderResolver from '../../types/BidderResolver';
import { DataSources } from '../../types/DataSources';

export default {
  Query: {},
  Mutation: {
    createBidder: async (
      _,
      { email, password }: { email: string; password: string },
      {
        dataSources,
        isTestRequest,
      }: { dataSources: DataSources; isTestRequest: boolean }
    ) => await create(dataSources.sqlBidderAPI, email, password, isTestRequest),
  },
} as BidderResolver;
