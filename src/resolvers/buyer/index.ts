import create from '../../commands/buyer/create'

export default {
    Query: {
    },
    Mutation: {
        createBuyer: async (_, { email, password }, { dataSources, isTestRequest }) => await create(dataSources.sqlBuyerAPI, email, password, isTestRequest)
    }
  }