import { ApolloServer } from '@apollo/server'
import { typeDefs, resolvers } from './graphql'

export const app = new ApolloServer({
  typeDefs,
  resolvers,
})
