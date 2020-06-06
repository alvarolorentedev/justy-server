export type BidderResolver = {
  Query: Record<string, unknown>;
  Mutation: {
    createBidder: Function;
  };
};

export default BidderResolver;
