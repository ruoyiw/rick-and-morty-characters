import { InMemoryCache, ApolloClient } from '@apollo/client'

// Create an ApolloClient instance
export const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})
