import { extendTheme } from '@chakra-ui/react'

// Extend the theme to include custom background color and text color
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.50',
        color: 'gray.800',
        minHeight: '100vh',
      },
    },
  },
})
