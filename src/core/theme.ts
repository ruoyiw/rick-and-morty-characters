import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.100',
        color: 'blue.900',
        minHeight: '100vh',
      },
    },
  },
})
