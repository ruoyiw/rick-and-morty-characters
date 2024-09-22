import { FC } from 'react'
import { Text, Icon, Box, HStack } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box
      bg="red.500"
      color="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
    >
      <HStack spacing={2}>
        <Icon as={WarningIcon} boxSize={6} />
        <Text fontWeight="bold">{message}</Text>
      </HStack>
    </Box>
  )
}
