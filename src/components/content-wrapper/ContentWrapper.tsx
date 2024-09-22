import { FC, PropsWithChildren } from 'react'
import { VStack, Text } from '@chakra-ui/react'

type ContentWrapperProps = PropsWithChildren<{
  title: string
}>

export const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  title,
}) => {
  return (
    <VStack spacing={[4, 6, 8]} padding={[4, 6, 8]}>
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        textAlign="center"
        as="h1"
      >
        {title}
      </Text>

      {children}
    </VStack>
  )
}
