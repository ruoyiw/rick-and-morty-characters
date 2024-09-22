'use client'

import { FC } from 'react'
import { notFound } from 'next/navigation'
import { useRouter, useSearchParams } from 'next/navigation'
import { Grid, GridItem, VStack } from '@chakra-ui/react'
import { useGetCharactersQuery } from '@api'
import { CharacterCard } from './CharacterCard'
import { LoadingSpinner } from '@components/loading-spinner'
import { Pagination } from '@components/pagination'
import { ModalProvider } from '@components/information-modal'
import { ErrorMessage } from '@components/error-message'

export const CharacterList: FC = () => {
  const router = useRouter()

  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const { data, loading, error } = useGetCharactersQuery({
    variables: { page: currentPage },
  })

  if (error) {
    return (
      <ErrorMessage message="Oops, an error occurred while fetching characters." />
    )
  }

  if (loading || !data) return <LoadingSpinner />

  if (currentPage > data.characters?.info.pages) {
    notFound()
  }

  const onPageChange = (page: number) => {
    router.push(`/?page=${page}`)
  }

  const { info, results } = data.characters || {}

  return (
    <ModalProvider>
      <VStack spacing={[4, 6, 8]}>
        <Grid
          h="100%"
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={[2, 4, 6]}
        >
          {results?.map((character) => (
            <GridItem key={character.id}>
              <CharacterCard character={character} />
            </GridItem>
          ))}
        </Grid>

        <Pagination
          currentPage={currentPage}
          totalPages={info?.pages}
          onPageChange={onPageChange}
        />
      </VStack>
    </ModalProvider>
  )
}
