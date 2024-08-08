import { FC } from 'react'
import { styled } from 'restyle'
import { Experience } from '../interfaces'

export const ExperienceItem: FC<Props> = ({ job }) => {
  return (
    <ExperienceListItem>
      <JobHeader>
        <JobTitle>{job.title}</JobTitle>
        <JobDate>{job.date}</JobDate>
      </JobHeader>
      <CompanyDetails>{job.company}</CompanyDetails>
      <JobDescription>{job.description}</JobDescription>
    </ExperienceListItem>
  )
}

const ExperienceListItem = styled('li', {
  marginBottom: '20px',
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
  color: '#888',
})

const CompanyDetails = styled('p', {
  fontSize: '18px',
  color: '#888',
  margin: '0 0 5px 0',
})

const JobDescription = styled('p', {
  fontSize: '16px',
  lineHeight: '1.6',
})

interface Props {
  job: Experience
}
