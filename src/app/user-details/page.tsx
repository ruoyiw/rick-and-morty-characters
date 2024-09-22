import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { UserDetailsForm } from '@components/user-details-form'

// User details page to get username and job title
const Page: NextPage = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p={[4, 6, 8]}
      w="100%"
      h="100vh"
    >
      <UserDetailsForm />
    </Flex>
  )
}

export default Page
