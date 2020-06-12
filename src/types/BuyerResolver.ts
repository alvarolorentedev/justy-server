import { IResolverObject } from 'apollo-server-express';

export type BuyerResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    createBuyer: IResolverObject<any, any, any>;
  };
};

export default BuyerResolver;
