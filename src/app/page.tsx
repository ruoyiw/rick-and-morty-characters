'use client'

import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import { Header } from '@components/header'
import { LoadingSpinner } from '@components/loading-spinner'
import { CharacterList } from '@components/character-list'
import { ContentWrapper } from '@components/content-wrapper'
import { getUserData } from '@core'

const Page: NextPage = () => {
  const { username, jobTitle } = getUserData()

  if (!(username && jobTitle)) return <LoadingSpinner />

  return (
    <Box w="100%">
      <Header />
      <ContentWrapper title="Rick and Morty Characters">
        <CharacterList />
      </ContentWrapper>
    </Box>
  )
}

export default Page
