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

// User details form component to get user's username and job title
export const UserDetailsForm: FC = () => {
  const router = useRouter()

  const goToMainPage = () => {
    router.push('/')
  }

  // Get stored username and job title from cookie
  const { username: storedUsername, jobTitle: storedJobTitle } =
    getUserData()

  // State variables to store username and job title from the input fields
  const [username, setUsername] = useState(storedUsername || '')
  const [jobTitle, setJobTitle] = useState(storedJobTitle || '')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setUserData({ username, jobTitle })
    goToMainPage()
  }

  // The form can be edited if the username and job title are saved already
  const canBeEdited = storedUsername && storedJobTitle
  const invalidUsername = !!storedUsername && !username // The username is invalid if the username field is changed to be empty
  const invalidJobTitle = !!storedJobTitle && !jobTitle // The job title is invalid if the job title field is changed to be empty

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
      {/*  Display the cover image only on desktop or tablet */}
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
              {/* username input field */}
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

              {/* job title input field */}
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

            {/* if the user details are already saved in cookie, display the cancel and save changes buttons */}
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
              /* if the user details are not saved in cookie, display the submit button */
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
