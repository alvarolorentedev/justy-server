export type BidderResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    /* eslint-disable-next-line @typescript-eslint/ban-types */
    createBidder: Function;
  };
};

export default BidderResolver;
