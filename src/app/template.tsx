'use client'

import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
} from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'
import { useEffect, PropsWithChildren } from 'react'
import { useUserData } from '@utils'
import theme from '@styles/theme'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const Template: NextPage<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const { getUserData } = useUserData()

  useEffect(() => {
    const userData = getUserData()
    if (!(userData?.username && userData?.jobTitle)) {
      router.push('/')
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ApolloProvider>
  )
}

export default Template
