import { FC } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useGetCharactersQuery } from '@api'
import { CharacterCard } from '@components/character-card'
import { Spinner } from '@components/spinner'

type CharacterListProps = {
  page: number
}

export const CharacterList: FC<CharacterListProps> = ({ page }) => {
  const { data, loading, error } = useGetCharactersQuery({
    variables: { page },
  })

  console.log({ data })

  if (loading) return <Spinner />

  return (
    <Grid
      h="100%"
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={[2, 4, 6]}
    >
      {data?.characters.results.map((character) => (
        <GridItem key={character.id}>
          <CharacterCard character={character} />
        </GridItem>
      ))}
    </Grid>
  )
}
