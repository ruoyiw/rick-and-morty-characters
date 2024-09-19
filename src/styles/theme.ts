import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'blue.900',
        minHeight: '100vh',
      },
    },
  },
})

export default theme
