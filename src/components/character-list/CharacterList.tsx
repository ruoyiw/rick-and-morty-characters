'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Grid, GridItem, VStack, Text } from '@chakra-ui/react'
import { useGetCharactersQuery } from '@api'
import { CharacterCard } from './CharacterCard'
import { LoadingSpinner } from '@components/loading-spinner'
import { Pagination } from '@components/pagination'
import { ModalProvider } from '@components/information-modal'
import { ErrorMessage } from '@components/error-message'

// Character list component
export const CharacterList: FC = () => {
  const router = useRouter()

  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  const { data, loading, error } = useGetCharactersQuery({
    variables: { page: currentPage },
  })

  // Handle loading and error states
  if (error) {
    return (
      <ErrorMessage message="Oops, an error occurred while fetching characters." />
    )
  }
  if (loading || !data) return <LoadingSpinner />

  const { info, results } = data.characters || {}

  // Redirect to the first page if the current page is out of bounds
  if (currentPage < 1 || currentPage > info.pages) {
    router.push('/')
  }

  const onPageChange = (page: number) => {
    router.push(`/?page=${page}`)
  }

  // Calculate the start and end numbers of the character list
  const startNumber = info.next
    ? (currentPage - 1) * results?.length + 1
    : info.count - results?.length + 1
  const endNumber = startNumber + results.length - 1

  const title = `${startNumber} - ${endNumber} of ${info.count} characters`

  return (
    <ModalProvider>
      <VStack spacing={[4, 6, 8]}>
        <VStack spacing={2} alignItems="flex-start">
          <Text fontSize="sm" fontWeight={600}>
            {title}
          </Text>

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
        </VStack>

        <Pagination
          currentPage={currentPage}
          totalPages={info?.pages}
          onPageChange={onPageChange}
        />
      </VStack>
    </ModalProvider>
  )
}
