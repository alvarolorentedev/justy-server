import { IResolverObject } from 'apollo-server-express';

export type BuyerResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
    createBuyer: IResolverObject<any, any, any> & Function;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
    validateCredentialsBuyer: IResolverObject<any, any, any> & Function;
  };
};

export default BuyerResolver;
