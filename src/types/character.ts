export type Status = 'Alive' | 'Dead' | 'unknown'

export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export type Character = {
  id: string
  name: string
  status: Status
  species: string
  type: string
  gender: Gender
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
