import type { Metadata, NextPage } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  viewport:
    'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover',
  title: 'Rick and Morty',
  description: 'Rick and Morty characters',
  icons: {
    icon: 'https://rickandmortyapi.com/favicon-32x32.png?v=1538abef51e33ef514e8fe1ab9aeab4e',
  },
}

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
