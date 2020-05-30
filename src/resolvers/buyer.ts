import create from '../commands/buyers/create'

export default {
    Query: {
    },
    Mutation: {
        createBuyer: async (_, { email, password }, { dataSources, isTestRequest }) => await create(dataSources.sqlAPI, email, password, isTestRequest)
    }
  }