import { FC } from 'react'
import { styled } from 'restyle'
import { Experience } from '../interfaces'
import { brandBlue, brandGray, brandWhite } from '../constants/styles'

export const ExperienceItem: FC<Props> = ({ job }) => {
  return (
    <ExperienceListItem>
      <JobHeader>
        <JobTitle>{job.title}</JobTitle>
        <JobDate>{job.date}</JobDate>
      </JobHeader>
      <CompanyDetails>{job.company}</CompanyDetails>
      <JobDescription>{job.description}</JobDescription>
      <PillsContainer>{job.skills?.map((skill, index) => <Pill key={index}>{skill}</Pill>)}</PillsContainer>
    </ExperienceListItem>
  )
}

const ExperienceListItem = styled('li', {
  marginBottom: '20px',
  padding: '20px',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  cursor: 'default',
  margin: '0 -20px',

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      backgroundColor: '#f5f5f51a',
    },
  },
})

const JobHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const JobTitle = styled('h3', {
  fontSize: '24px',
  fontWeight: '500',
  margin: '5px 0',
})

const JobDate = styled('span', {
  fontSize: '16px',
  color: brandGray,
  marginLeft: '5px',
})

const CompanyDetails = styled('p', {
  fontSize: '18px',
  color: brandGray,
  margin: '0 0 5px 0',
})

const JobDescription = styled('p', {
  fontSize: '16px',
  lineHeight: '1.6',
})

const PillsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '10px',
})

const Pill = styled('span', {
  display: 'inline-block',
  padding: '5px 10px',
  margin: '5px 5px 0 0',
  borderRadius: '20px',
  backgroundColor: brandWhite,
  color: brandBlue,
  fontSize: '14px',
  fontWeight: '500',
})

interface Props {
  job: Experience
}
