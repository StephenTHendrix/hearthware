import { styled } from 'restyle'
import { brandRed } from './constants/styles'

export default function Page() {
  return (
    <PageContainer>
      <IntroSection>
        <IntroTitle>Hi! I'm Stephen.</IntroTitle>
        <IntroDescription>
          I make Hearthware — a term for software crafted by a close-knit, collaborative team, designed to serve
          communities, improve lives, and make room at the table for everyone.
        </IntroDescription>
      </IntroSection>
      <Section />
    </PageContainer>
  )
}

const PageContainer = styled('div', {
  fontFamily: 'Inter, sans-serif',
  lineHeight: '1.6',
})

const IntroSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0 20px',
})

const IntroTitle = styled('h1', {
  fontSize: '48px',
  fontWeight: '700',
  margin: '0 0 10px 0',
})

const IntroDescription = styled('p', {
  maxWidth: '600px',
  fontSize: '18px',
})

const Section = styled('section', {
  height: '100px',
  backgroundColor: brandRed,
})
