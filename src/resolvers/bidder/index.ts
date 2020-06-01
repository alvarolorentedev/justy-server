import create from '../../commands/bidder/create'

export default {
    Query: {
    },
    Mutation: {
        createBidder: async (_, { email, password }, { dataSources, isTestRequest }) => await create(dataSources.sqlBidderAPI, email, password, isTestRequest)
    }
  }