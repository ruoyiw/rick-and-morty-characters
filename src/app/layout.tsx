import type { Metadata, NextPage } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty characters',
  // icons: {
  //   icon: 'https://rickandmortyapi.com/favicon-32x32.png?v=1538abef51e33ef514e8fe1ab9aeab4e',
  // },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 0,
  viewportFit: 'cover',
}

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
