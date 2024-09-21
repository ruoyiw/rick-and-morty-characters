'use client'

import { NextPage } from 'next'
import { Box, VStack, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Header } from '@components/header'
import { Spinner } from '@components/spinner'
import { CharacterList } from '@components/character-list'
import { getUserData } from '@core'

type PageProps = PropsWithChildren<{
  params: {
    page: string
  }
}>

const Page: NextPage<PageProps> = ({ params: { page } }) => {
  const { username, jobTitle } = getUserData()

  if (!(username && jobTitle)) return <Spinner />

  return (
    <Box w="100%">
      <Header />

      <VStack spacing={[4, 6, 8]} padding={[4, 6, 8]}>
        <Text
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
          textAlign="center"
          as="h1"
        >
          Rick and Morty Characters
        </Text>
        <CharacterList page={Number(page) || 1} />
      </VStack>
    </Box>
  )
}

export default Page
