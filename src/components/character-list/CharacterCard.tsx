import { FC } from 'react'
import { HStack, Text, Flex, Box } from '@chakra-ui/react'
import { Character } from '@types'
import { NextImage } from '@components/next-image'
import { useInformationModal } from '@components/information-modal'
import { StatusBadge } from '@components/status-badge'

type CharacterCardProps = {
  character: Character
}

// Hover and focus styles
const hoverFocusStyles = {
  borderColor: 'orange.400',
  color: 'orange.400',
  '& .image-wrapper img': {
    transform: 'scale(1.1)',
  },
}

// Character card component to display basic character information including name, image, status, and species
export const CharacterCard: FC<CharacterCardProps> = ({
  character,
}) => {
  const { name, image, status, species } = character

  const { onOpen } = useInformationModal()

  return (
    <HStack
      tabIndex={0}
      outline="none"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      transition="borderColor 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out"
      _hover={hoverFocusStyles}
      _focus={hoverFocusStyles}
      overflow="hidden"
      backgroundColor="white"
      w="100%"
      cursor="pointer"
      onClick={() => onOpen(character)}
      title={`View detailed information about ${character.name}`}
      aria-label={`Open ${character.name} information`}
    >
      <Box className="image-wrapper" maxW="45%" overflow="hidden">
        <NextImage
          src={image}
          alt={`${name} image`}
          width={300}
          height={300}
          style={{
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </Box>

      <Flex direction="column" gap={2} p={2} w="100%">
        <StatusBadge status={status} />
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
