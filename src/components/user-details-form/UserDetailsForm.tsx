'use client'

import { FC, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Stack,
  Box,
  Flex,
  Text,
  FormErrorMessage,
  Img,
} from '@chakra-ui/react'
import { getUserData, setUserData } from '@core'

export const UserDetailsForm: FC = () => {
  const router = useRouter()

  const goToMainPage = () => {
    router.push('/')
  }

  const { username: storedUsername, jobTitle: storedJobTitle } =
    getUserData()

  const [username, setUsername] = useState(storedUsername || '')
  const [jobTitle, setJobTitle] = useState(storedJobTitle || '')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setUserData({ username, jobTitle })
    goToMainPage()
  }

  const canBeEdited = storedUsername && storedJobTitle
  const invalidUsername = !!storedUsername && !username
  const invalidJobTitle = !!storedJobTitle && !jobTitle

  return (
    <Flex
      direction={['column', 'row']}
      maxW="900px"
      maxH="610px"
      bg="white"
      rounded="2xl"
      boxShadow="lg"
      w="100%"
      h={['100%', 'auto']}
    >
      <Box w="50%" display={['none', 'block']}>
        <Img
          src="/cover-image.png"
          alt="Rick and Morty Cover Image"
          w="100%"
          h="100%"
          borderLeftRadius="2xl"
        />
      </Box>

      <VStack
        w={['100%', '50%']}
        h={['100%', 'auto']}
        justifyContent="center"
        align="center"
        spacing={8}
        p={[4, 6, 12]}
      >
        <Text fontSize="xl" textAlign="center">
          {canBeEdited
            ? 'Edit your details'
            : 'Enter your details to get started'}
        </Text>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={10}>
            <VStack spacing={4} w="100%">
              <FormControl isRequired isInvalid={invalidUsername}>
                <FormLabel fontWeight="bold">Username</FormLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. Rick Sanchez"
                  _placeholder={{ color: 'gray.300' }}
                  focusBorderColor="orange.400"
                />
                {invalidUsername ? (
                  <FormErrorMessage>
                    Please enter a username
                  </FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl isRequired isInvalid={invalidJobTitle}>
                <FormLabel fontWeight="bold">Job Title</FormLabel>
                <Input
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Mad Scientist"
                  _placeholder={{ color: 'gray.300' }}
                  focusBorderColor="orange.400"
                />
                {invalidJobTitle ? (
                  <FormErrorMessage>
                    Please enter a job title
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            </VStack>

            {canBeEdited ? (
              <Stack
                direction={['column-reverse', 'row']}
                spacing={2}
                w="100%"
              >
                <Button
                  colorScheme="orange"
                  w="100%"
                  variant="outline"
                  onClick={goToMainPage}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  colorScheme="orange"
                  w="100%"
                  isDisabled={
                    !username ||
                    !jobTitle ||
                    (storedUsername === username &&
                      storedJobTitle === jobTitle)
                  }
                >
                  Save
                </Button>
              </Stack>
            ) : (
              <Button
                type="submit"
                colorScheme="orange"
                w="100%"
                isDisabled={!username || !jobTitle}
              >
                Submit
              </Button>
            )}
          </VStack>
        </form>
      </VStack>
    </Flex>
  )
}
