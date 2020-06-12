import { IResolverObject } from "apollo-server-express";

export type BidderResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    createBidder: IResolverObject<any, any, any>;
  };
};

export default BidderResolver;