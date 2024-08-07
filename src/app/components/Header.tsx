import { FC } from 'react'
import { styled } from 'restyle'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Image src='logo-dark.svg' alt='logo' height='80' width='80' />
    </StyledHeader>
  )
}

const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '20px',
})
