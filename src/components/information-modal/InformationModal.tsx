import { FC, ReactNode } from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  VStack,
  Text,
  Divider,
  Box,
  Tag,
  TagLabel,
  TagProps,
} from '@chakra-ui/react'
import { useInformationModal } from './useInformationModal'
import { NextImage } from '@components/next-image'
import { StatusBadge } from '@components/status-badge'
import { Gender } from '@types'

// List item component to display character information with a label and value
const ListItem = ({
  label,
  value,
}: {
  label: string
  value?: ReactNode
}) =>
  value ? (
    <HStack justify="space-between">
      <Text fontWeight="bold">{label}:</Text>
      <Text textAlign="right">{value}</Text>
    </HStack>
  ) : null

// Mapping of gender to color scheme
const genderColorsMapping: Record<Gender, TagProps['colorScheme']> = {
  Female: 'pink',
  Male: 'blue',
  Genderless: 'purple',
  unknown: 'gray',
}

const GenderTag = ({ gender }: { gender: Gender }) => (
  <Tag colorScheme={genderColorsMapping[gender]}>
    <TagLabel>{gender}</TagLabel>
  </Tag>
)

export const InformationModal: FC = () => {
  const { isOpen, onClose, character } = useInformationModal()

  const {
    name,
    status,
    image,
    species,
    type,
    gender,
    origin,
    location,
    episode,
    created,
  } = character || {}

  const createdDate = created ? new Date(created) : null

  return (
    <Modal
      size={['sm', 'md', 'xl']}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignItems="center">
          {name} {status ? <StatusBadge status={status} /> : null}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4} align="center">
            {image ? (
              <Box
                w="100%"
                maxW={[240, 300]}
                boxShadow="lg"
                rounded="lg"
              >
                <NextImage
                  src={image}
                  alt={`${name} image`}
                  width={300}
                  height={300}
                  style={{
                    borderRadius: '8px',
                  }}
                />
              </Box>
            ) : null}

            <Divider />

            <VStack spacing={2} align="stretch" w="100%">
              <ListItem label="Species" value={species} />
              <ListItem label="type" value={type} />
              <ListItem
                label="Gender"
                value={gender ? <GenderTag gender={gender} /> : null}
              />
              <ListItem label="Origin" value={origin?.name} />
              <ListItem
                label="Last known location"
                value={location?.name}
              />
              <ListItem
                label="First seen in"
                value={episode?.[0]?.name}
              />
              <ListItem
                label="Created at"
                value={createdDate?.toLocaleString()}
              />
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
