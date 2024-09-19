'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import { UserDetailsForm } from '@components/user-details-form'

const Page: NextPage = () => {
  const router = useRouter()

  const goToMainPage = () => {
    router.push('/characters')
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p={[4, 6, 8]}
      w="100%"
      h="100vh"
    >
      <UserDetailsForm goToMainPage={goToMainPage} />
    </Flex>
  )
}

export default Page
