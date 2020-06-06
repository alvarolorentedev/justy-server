export type BuyerResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    createBuyer: Function;
  };
};

export default BuyerResolver;
