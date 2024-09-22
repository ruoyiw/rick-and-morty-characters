'use client'

import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { NextPage } from 'next'
import { useEffect, PropsWithChildren, useState } from 'react'
import { getUserData, apolloClient, theme } from '@core'

const Template: NextPage<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  // Get user data (username and job title) from cookie
  const { username, jobTitle } = getUserData()
  // State to check if the component is rendered on the client side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Set isClient to true when the component is mounted
    // Redirect to the user-details page if username or job title is missing
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
