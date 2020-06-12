import { IResolverObject } from 'apollo-server-express';

export type BidderResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
    createBidder: IResolverObject<any, any, any> & Function;
  };
};

export default BidderResolver;
