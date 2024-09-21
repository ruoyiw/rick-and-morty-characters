'use client'

import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'
import { useEffect, PropsWithChildren, useState } from 'react'
import { getUserData, apolloClient, theme } from '@core'

const Template: NextPage<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const { username, jobTitle } = getUserData()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (!(username && jobTitle)) {
      router.push('/user-details')
    }
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        {isClient ? children : null}
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default Template
