import { FC } from 'react'
import { styled } from 'restyle'
import { ExperienceItem } from './ExperienceItem'
import { Experience } from '../interfaces'
import { brandBlue, brandRed } from '../constants/styles'

export const ExperienceSection: FC<Props> = ({ experienceData }) => (
  <Section>
    <SectionTitle>Experience</SectionTitle>
    <ExperienceList>
      {experienceData.map(job => (
        <ExperienceItem key={job.company} job={job} />
      ))}
    </ExperienceList>
  </Section>
)

const Section = styled('section', {
  padding: '20px 0',
})

const SectionTitle = styled('h2', {
  fontSize: '32px',
  fontWeight: '600',
  margin: '20px 0',
  borderBottom: `1px solid ${brandRed}`,
})

const ExperienceList = styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})

interface Props {
  experienceData: Experience[]
}
