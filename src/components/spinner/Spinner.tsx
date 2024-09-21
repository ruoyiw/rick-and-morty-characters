import { FC } from 'react'
import { Spinner as LibSpinner, Flex } from '@chakra-ui/react'

export const Spinner: FC = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    p={4}
    w="100%"
    h="100%"
  >
    <LibSpinner
      thickness="6px"
      speed="0.65s"
      color="orange.400"
      size="xl"
    />
  </Flex>
)
