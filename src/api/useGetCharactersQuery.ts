import {
  gql,
  QueryHookOptions,
  QueryResult,
  useQuery,
} from '@apollo/client'
import { Character } from '@types'

// The GraphQL query to fetch characters with pagination
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
          name
        }
        created
      }
    }
  }
`

type GetCharactersQueryVariables = {
  page: number
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

// Custom hook to use the GetCharacters query
export const useGetCharactersQuery = (
  options: QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
): QueryResult<GetCharactersQuery, GetCharactersQueryVariables> => {
  return useQuery(GET_CHARACTERS_GQL, options)
}
