import type { Metadata } from 'next'
import { styled } from 'restyle'
import { brandBlue, brandWhite } from './constants/styles'
import { Header } from './components/Header'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'Hearthware',
  description: 'Bringing People Together',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <StyledBody className={poppins.className}>
        <Header />
        {children}
      </StyledBody>
    </html>
  )
}

const StyledBody = styled('body', {
  backgroundColor: brandBlue,
  color: brandWhite,
  margin: 0,
})
