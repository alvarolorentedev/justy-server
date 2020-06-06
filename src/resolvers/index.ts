import buyer from './buyer';
import bidder from './bidder';

const Query = { ...buyer.Query, ...bidder.Query };
const Mutation = { ...buyer.Mutation, ...bidder.Mutation };

export default {
  // Query,
  Mutation,
};
