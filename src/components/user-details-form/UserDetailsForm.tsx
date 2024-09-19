'use client'

import { FC, useState, FormEvent } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Flex,
  Text,
  Img,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useUserData } from '@utils'

export type UserDetailsFormProps = {
  goToMainPage: VoidFunction
}
export const UserDetailsForm: FC<UserDetailsFormProps> = ({
  goToMainPage,
}) => {
  const { getUserData, setUserData } = useUserData()
  const userData = getUserData()

  const [username, setUsername] = useState(userData?.username || '')
  const [jobTitle, setJobTitle] = useState(userData?.jobTitle || '')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setUserData({ username, jobTitle })
    goToMainPage()
  }

  const canBeEdited = userData?.username && userData?.jobTitle
  const invalidUsername = !!userData?.username && !username
  const invalidJobTitle = !!userData?.jobTitle && !jobTitle

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
      <Box w="50%" display={{ base: 'none', sm: 'block' }}>
        <Img
          src="https://i.ebayimg.com/00/s/MTYwMFgxMDg1/z/YD0AAOSwojBdRUIG/$_57.JPG?set_id=8800005007"
          alt="Rick and Morty Cover Image"
          w="100%"
          h="100%"
          borderLeftRadius="2xl"
          backdropBlur="5px"
        />
      </Box>

      <Stack
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
          <Stack direction="column" spacing={10}>
            <Stack direction="column" spacing={4} w="100%">
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
            </Stack>

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
                  Back
                </Button>
                <Button
                  type="submit"
                  colorScheme="orange"
                  w="100%"
                  isDisabled={
                    !username ||
                    !jobTitle ||
                    (userData?.username === username &&
                      userData?.jobTitle === jobTitle)
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
          </Stack>
        </form>
      </Stack>
    </Flex>
  )
}
