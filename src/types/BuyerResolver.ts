import { IResolverObject } from "apollo-server-express";

export type BuyerResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    createBuyer: IResolverObject<any, any, any>;
  };
};

export default BuyerResolver;
