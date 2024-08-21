'use client'

import { FC, useState } from 'react'
import { styled } from 'restyle'
import { ExperienceItem } from './ExperienceItem'
import { Experience } from '../interfaces'
import { brandRed, brandLightBlue, brandWhite, brandLighterBlue } from '../constants/styles'
import { DropdownArrow } from '../svg/DropdownArrow'

export const ExperienceSection: FC<Props> = ({ experienceData }) => {
  const [showAll, setShowAll] = useState(false)

  const toggleShowAll = () => setShowAll(prev => !prev)

  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <ExperienceList>
        {experienceData.slice(0, 3).map(job => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </ExperienceList>
      <ToggleContainer>
        <ToggleButton onClick={toggleShowAll}>
          {showAll ? 'Hide Teaching Experience' : 'Show Teaching Experience'}
          <DropdownArrow dropdownOpen={showAll} fill={brandWhite} height='16px' width='16px' />
        </ToggleButton>
      </ToggleContainer>
      <AdditionalExperienceList showAll={showAll}>
        {experienceData.slice(3).map(job => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </AdditionalExperienceList>
    </Section>
  )
}

const Section = styled('section', {
  padding: '20px 0',
})

const SectionTitle = styled('h2', {
  fontSize: '32px',
  fontWeight: '600',
  margin: '20px 0',
  borderBottom: `2px solid ${brandRed}`,
})

const ExperienceList = styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})

const AdditionalExperienceList = styled(ExperienceList, (props: { showAll: boolean }) => ({
  maxHeight: props.showAll ? '1000px' : '0',
  opacity: props.showAll ? 1 : 0,
  overflow: props.showAll ? 'visible' : 'hidden',
  transition: 'max-height 0.5s ease, opacity 0.5s ease',
  marginTop: '20px',
}))

const ToggleContainer = styled('div', {
  textAlign: 'center',
  marginTop: '10px',
})

const ToggleButton = styled('button', {
  padding: '8px 16px',
  backgroundColor: brandLightBlue,
  color: brandWhite,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'background-color 0.3s ease-in-out',
  width: '225px',

  '&:hover': {
    backgroundColor: brandLighterBlue,
  },
})

interface Props {
  experienceData: Experience[]
}
