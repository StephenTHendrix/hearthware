'use client'

import { styled } from 'restyle'
import { useState, useEffect, useRef } from 'react'
import { ExperienceSection } from './components/ExperienceSection'
import { experienceData, gitHubUrl, linkedInUrl, projectData } from './data'
import { ProjectSection } from './components/ProjectSection'
import { brandGreen, brandOrange, brandRed, brandWhite, brandYellow } from './constants/styles'
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
            collaborative team designed to promote social progress, improve lives, and make room at the table for
            underserved populations.
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
              I made Hearthware.org to serve as an aspirational portfolio - I don’t have working side projects to demo,
              but I do have five years of experience as a software engineer, seven years of experience as an educator,
              and a deep desire to work hard on projects I believe in.
              <br />
              <br />
              I’ve worked as the sole developer at a successful startup, an SME of high-level enterprise features and
              mentor to junior developers at iHeartMedia, and a senior engineer at the agency VShift, working
              cross-functionally with design and product teams to build custom greenfield solutions for our Fortune 100
              clients. I find it deeply satisfying to understand the entirety of a feature or application that traverses
              the full stack, including TypeScript, Next, React, GraphQL, Node, PostgreSQL, and AWS.
            </AboutSection>
          </div>
          <div id='experience' ref={experienceRef}>
            <ExperienceSection experienceData={experienceData} />
          </div>

          <div id='projects' ref={projectsRef}>
            <ProjectSection projectData={projectData} />
          </div>
        </Column>
      </PageContainer>
    </>
  )
}

const PageContainer = styled('div', {
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
  color: '#888',
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
  borderBottom: `1px solid ${brandRed}`,

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
