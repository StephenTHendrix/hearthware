'use client'

import { styled } from 'restyle'
import { useState, useEffect, useRef } from 'react'
import { ExperienceSection } from './components/ExperienceSection'
import { experienceData, projectData } from './data'
import { ProjectSection } from './components/ProjectSection'
import { brandWhite } from './constants/styles'
import Image from 'next/image'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'
import Link from 'next/link'

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
    <PageContainer>
      <StyledImage src='logo-dark.svg' alt='logo' height='80' width='80' />
      <StickyColumn>
        <IntroTitle>Hi! I'm Stephen.</IntroTitle>
        <IntroDescription>
          I make Hearthware — a term for software crafted by a close-knit, collaborative team, designed to serve
          communities, improve lives, and make room at the table for all.
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

        {/* <SocialIcons>
          <SocialIcon href='https://github.com/yourusername' target='_blank'>
            GitHub
          </SocialIcon>
          <SocialIcon href='https://linkedin.com/in/yourusername' target='_blank'>
            LinkedIn
          </SocialIcon>
        </SocialIcons> */}
      </StickyColumn>
      <Column>
        <div ref={aboutRef}>
          <Section id='about'>
            <IntroDescription>
              I began my career in education while still in college, tutoring for both Breakthrough Collaborative and
              the Simon Scholars Foundation, helping underserved middle and high school students in Santa Fe become the
              first college graduates in their families. I followed this path for five more years, eventually becoming a
              certified teacher in Dallas ISD and collecting a few fridge door's worth of student notes and letters
              along the way.
              <br />
              <br />
              Since then, I've spent the last 5 years working my way toward becoming a senior software engineer, doing
              everything from being the sole developer at a startup to leading cross-functional team efforts at
              iHeartMedia and VShift.
            </IntroDescription>
          </Section>
        </div>

        <div ref={experienceRef}>
          <Section id='experience'>
            <ExperienceSection experienceData={experienceData} />
          </Section>
        </div>

        <div ref={projectsRef}>
          <Section id='projects'>
            <ProjectSection projectData={projectData} />
          </Section>
        </div>
      </Column>
    </PageContainer>
  )
}

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '60px 40px',
  gap: '20px',

  '@media screen and (max-width: 1024px)': {
    flexDirection: 'column',
    padding: '60px 40px',
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
  top: '60px',
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
    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
  },

  '&:hover': {
    color: brandWhite,
    textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
  },
})

// const SocialIcons = styled('div', {
//   marginTop: 'auto',
//   display: 'flex',
//   gap: '15px',
// })

// const SocialIcon = styled('a', {
//   fontSize: '24px',
//   color: '#888',
//   textDecoration: 'none',

//   '&:hover': {
//     color: '#0073e6',
//   },
// })

const Section = styled('section', {
  marginBottom: '40px',
})
