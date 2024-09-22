import type { Metadata, NextPage } from 'next'
import { PropsWithChildren } from 'react'

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty characters',
}

// Define the viewport for the application
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
