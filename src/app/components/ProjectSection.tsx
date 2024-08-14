import { styled } from 'restyle'
import { Project } from '../interfaces'
import { ProjectItem } from './ProjectItem'
import { FC } from 'react'
import { brandGray, brandRed } from '../constants/styles'

export const ProjectSection: FC<Props> = ({ projectData }) => (
  <Section>
    <SectionTitle>Projects</SectionTitle>
    <ProjectList>
      {projectData.map((project, index) => (
        <>
          <ProjectItem key={index} project={project} />
          {index === 1 && (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <AdditionalText>// TODO: Develop these projects</AdditionalText>
          )}
        </>
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
  borderBottom: `2px solid ${brandRed}`,
})

const ProjectList = styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})

const AdditionalText = styled('p', {
  marginTop: '20px',
  fontSize: '18px',
  color: brandGray,
})

interface Props {
  projectData: Project[]
}
