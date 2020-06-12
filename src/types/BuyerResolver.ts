export type BuyerResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    /* eslint-disable-next-line @typescript-eslint/ban-types */
    createBuyer: Function;
  };
};

export default BuyerResolver;
