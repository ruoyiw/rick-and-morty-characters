import { FC } from 'react'
import { Spinner, Flex, SpinnerProps } from '@chakra-ui/react'

export const LoadingSpinner: FC<SpinnerProps> = (props) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    p={4}
    w="100%"
    h="100%"
  >
    <Spinner
      thickness="6px"
      speed="0.65s"
      color="orange.400"
      size="xl"
      {...props}
    />
  </Flex>
)
