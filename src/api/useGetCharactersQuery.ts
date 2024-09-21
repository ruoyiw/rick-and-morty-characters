import {
  gql,
  QueryHookOptions,
  QueryResult,
  useQuery,
} from '@apollo/client'

const GET_CHARACTERS_GQL = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          id
          name
          episode
        }
        created
      }
    }
  }
`

type GetCharactersQueryVariables = {
  page: number
}

type Status = 'Alive' | 'Dead' | 'unknown'

export type Character = {
  id: string
  name: string
  status: Status
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
  episode: Array<{
    id: string
    name: string
    episode: string
  }>
  created: string
}

type GetCharactersQuery = {
  characters: {
    info: {
      count: number
      pages: number
      next: number | null
      prev: number | null
    }
    results: Array<Character>
  }
}

export const useGetCharactersQuery = (
  options: QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
): QueryResult<GetCharactersQuery, GetCharactersQueryVariables> => {
  return useQuery(GET_CHARACTERS_GQL, options)
}
