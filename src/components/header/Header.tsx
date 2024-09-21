'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Avatar, Text, VStack, HStack } from '@chakra-ui/react'
import { getUserData } from '@core'

export const Header: FC = () => {
  const { username, jobTitle } = getUserData()

  const router = useRouter()

  const goToEditUser = () => {
    router.push('/user-details')
  }

  return (
    <HStack
      w="100%"
      h="60px"
      //   bg="white"
      //   borderBottom={1}
      //   borderBottomColor="gray.300"
      //   borderBottomStyle="solid"
      p={4}
      justifyContent="right"
      height="fit-content"
      gap={3}
    >
      <VStack spacing={0} alignItems="flex-start">
        <Text fontSize={['md', 'lg']} fontWeight={600}>
          Welcome! {username}
        </Text>
        <Text fontSize={['sm', 'md']} color="gray.500">
          {jobTitle}
        </Text>
      </VStack>

      <Avatar
        name={username}
        src="https://toppng.com/uploads/preview/rick-and-morty-sticker-stickers-rick-and-morty-11563506183hpenzns16l.png"
        onClick={goToEditUser}
        cursor="pointer"
        title="Go to edit user details"
      />
    </HStack>
  )
}
