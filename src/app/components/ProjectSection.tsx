import { styled } from 'restyle'
import { Project } from '../interfaces'
import { ProjectItem } from './ProjectItem'
import { FC } from 'react'
import { brandRed } from '../constants/styles'

export const ProjectSection: FC<Props> = ({ projectData }) => (
  <Section>
    <SectionTitle>Projects</SectionTitle>
    <ProjectList>
      {projectData.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ProjectList>
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

const ProjectList = styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})

interface Props {
  projectData: Project[]
}
