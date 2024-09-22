'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Avatar, Text, VStack, HStack } from '@chakra-ui/react'
import { getUserData } from '@core'

// Header component to display user details and static avatar
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
        as="button"
        name={username}
        src="/header-avatar.png"
        onClick={goToEditUser}
        cursor="pointer"
        title="Go to edit user details"
        aria-label="Edit user details"
      />
    </HStack>
  )
}
