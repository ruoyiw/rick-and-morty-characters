import { FC } from 'react'
import { Img, Badge, HStack, Text, Flex, Box } from '@chakra-ui/react'
import { Character } from '@api'

type CharacterCardProps = {
  character: Character
}

const badgeColorsMapping = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
}

export const CharacterCard: FC<CharacterCardProps> = ({
  character,
}) => {
  const { name, image, status, species } = character

  return (
    <HStack
      maxW="sm"
      borderWidth="1px"
      borderColor="white"
      borderRadius="lg"
      transition="borderColor 0.2s ease-in-out, color 0.2s ease-in-out"
      _hover={{
        // boxShadow: 'lg',
        borderColor: 'orange.400',
        color: 'orange.400',
        '& .image-wrapper img': {
          transform: 'scale(1.1)',
        },
      }}
      overflow="hidden"
      backgroundColor="white"
      w="100%"
      cursor="pointer"
    >
      <Box className="image-wrapper" maxW="40%" overflow="hidden">
        <Img
          src={image}
          alt={`${name} image`}
          w="100%"
          transition="transform 0.2s ease-in-out"
        />
      </Box>

      <Flex direction="column" gap={2} p={2} w="100%">
        <Badge
          borderRadius="full"
          px="2"
          colorScheme={badgeColorsMapping[status]}
          w="fit-content"
        >
          {status}
        </Badge>
        <Flex direction="column">
          <Text fontSize={['md', 'lg']} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {species}
          </Text>
        </Flex>
      </Flex>
    </HStack>
  )
}
