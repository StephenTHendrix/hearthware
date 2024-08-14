'use client'

import { styled } from 'restyle'
import { useState, useEffect, useRef } from 'react'
import { ExperienceSection } from './components/ExperienceSection'
import { experienceData, gitHubUrl, linkedInUrl, projectData } from './data'
import { ProjectSection } from './components/ProjectSection'
import { brandGray, brandOrange, brandRed, brandWhite, brandYellow } from './constants/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'
import { LinkedIn } from './svg/LinkedIn'
import { GitHub } from './svg/GitHub'

export default function Page() {
  const [activeSection, setActiveSection] = useState('')

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  const aboutInView = useIntersectionObserver(aboutRef, { threshold: 0.5 })
  const experienceInView = useIntersectionObserver(experienceRef, { threshold: 0.5 })
  const projectsInView = useIntersectionObserver(projectsRef, { threshold: 0.5 })

  useEffect(() => {
    if (aboutInView) {
      setActiveSection('about')
    } else if (experienceInView) {
      setActiveSection('experience')
    } else if (projectsInView) {
      setActiveSection('projects')
    }
  }, [aboutInView, experienceInView, projectsInView])

  return (
    <>
      <StyledImage src='logo-dark.svg' alt='logo' height='80' width='80' />
      <PageContainer>
        <StickyColumn>
          <IntroTitle>Hi! I'm Stephen.</IntroTitle>
          <IntroDescription>
            I want to make <HearthwareText>Hearthware</HearthwareText> - a term for software crafted by a close-knit,
            collaborative team designed to meaningfully improve the world.
          </IntroDescription>

          <Nav>
            <NavItem href='#about' className={activeSection === 'about' ? 'active' : ''}>
              About
            </NavItem>
            <NavItem href='#experience' className={activeSection === 'experience' ? 'active' : ''}>
              Experience
            </NavItem>
            <NavItem href='#projects' className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </NavItem>
          </Nav>

          <SocialIcons>
            <SocialIcon href={linkedInUrl}>
              <LinkedIn />
            </SocialIcon>
            <SocialIcon href={gitHubUrl}>
              <GitHub />
            </SocialIcon>
          </SocialIcons>
        </StickyColumn>
        <Column>
          <div id='about' ref={aboutRef}>
            <AboutTitle>About</AboutTitle>
            <AboutSection>
              Hearthware.org is a work in progress, started after I found myself seeking a deeper sense of fulfillment
              in my work. I became a software engineer five years ago because I love solving novel problems with small,
              dedicated teams. While that hasn't changed at all, now I find myself wanting to feel more connected to and
              invested in the software I build, which could look like anything from creating tools for direct
              humanitarian aid or developing innovative solutions that modernize industries and improve lives.
              <br />
              <br />
              Throughout my career, I've focused on transforming vague problems into fully fleshed-out solutions,
              designing greenfield projects from the ground up, and collaborating with cross-functional teams in a
              variety of environments: a small startup that eventually got
              <StyledLink href='https://transactly.com' target='_blank' rel='noopener noreferrer'>
                &nbsp;acquired
              </StyledLink>
              , America’s #1 audio
              <StyledLink href='https://www.iheartmedia.com/' target='_blank' rel='noopener noreferrer'>
                &nbsp;company
              </StyledLink>
              , and a mid-sized digital
              <StyledLink href='https://www.vshift.com/' target='_blank' rel='noopener noreferrer'>
                &nbsp;agency&nbsp;
              </StyledLink>
              for enterprise-scale brands in regulated industries. I love the feeling of digging into a difficult
              problem in order to ask good questions that create clarity out of confusion.
              <br />
              <br />
              Even in my free time I'm solving community-oriented puzzles, whether that means rock climbing, playing
              board games, or watching groups of friends play Dungeons & Dragons. My passion for connecting with others
              through shared complex interests is even what led me to study philosophy at a small discussion-based
              college, and why I became a teacher after graduating. I love being a software engineer, and I’m eager to
              use my problem-solving skills to create meaningful solutions that help make the world a better and more
              welcoming place.
            </AboutSection>
          </div>
          <div id='experience' ref={experienceRef}>
            <ExperienceSection experienceData={experienceData} />
          </div>

          <div id='projects' ref={projectsRef}>
            <ProjectSection projectData={projectData} />
          </div>
        </Column>
        <Attribution href='https://brittanychiang.com' target='_blank' rel='noopener noreferrer'>
          Design inspired by Brittany Chiang
        </Attribution>
      </PageContainer>
    </>
  )
}

const PageContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  padding: '70px 40px',
  gap: '20px',

  '@media screen and (max-width: 1024px)': {
    flexDirection: 'column',
  },
})

const StyledImage = styled(Image, {
  position: 'absolute',
  top: 5,
  right: 5,
})

const Column = styled('div', {
  flex: '1 1',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

const StickyColumn = styled(Column, {
  position: 'sticky',
  top: '70px',
  alignSelf: 'flex-start',
  height: 'fit-content',

  '@media screen and (max-width: 1024px)': {
    position: 'relative',
    top: 'unset',
    alignSelf: 'unset',
  },
})

const IntroTitle = styled('h1', {
  fontSize: '48px',
  fontWeight: '700',
  margin: '0 0 10px 0',

  '@media screen and (max-width: 1024px)': {
    fontSize: '36px',
  },
})

const HearthwareText = styled('span', {
  color: brandOrange,
  fontWeight: 'bold',
})

const IntroDescription = styled('p', {
  fontSize: '18px',

  '@media screen and (max-width: 1024px)': {
    fontSize: '16px',
  },
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '20px',
  width: 'max-content',

  '@media screen and (max-width: 1024px)': {
    display: 'none',
  },
})

const NavItem = styled(Link, {
  display: 'inline-block',
  fontSize: '18px',
  fontWeight: '500',
  textDecoration: 'none',
  color: brandGray,
  transition: 'text-shadow 0.3s ease-in-out, color 0.3s ease-in-out',
  padding: '5px 0',

  '&.active': {
    color: brandWhite,
    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  },

  '&:hover': {
    color: brandWhite,
    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  },
})

const SocialIcons = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  gap: '15px',
})

const SocialIcon = styled(Link, {
  textDecoration: 'none',
  transition: 'fill 0.3s ease-in-out, filter 0.3s ease-in-out',

  '& svg': {
    transition: 'fill 0.3s ease-in-out, filter 0.3s ease-in-out',
  },

  '&:hover svg': {
    fill: brandWhite,
    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
  },
})

const AboutTitle = styled('h2', {
  fontSize: '32px',
  fontWeight: '600',
  margin: '20px 0',
  borderBottom: `2px solid ${brandRed}`,

  '@media screen and (min-width: 1025px)': {
    display: 'none',
  },
})

const AboutSection = styled('p', {
  fontSize: '18px',

  '@media screen and (max-width: 1024px)': {
    fontSize: '16px',
  },
})

const StyledLink = styled('a', {
  color: brandOrange,
  textDecoration: 'none',
  transition: 'color 0.3s ease-in-out',

  '&:hover': {
    color: brandYellow,
  },
})

const Attribution = styled('a', {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  fontSize: '10px',
  color: brandGray,
  textDecoration: 'none',
})
