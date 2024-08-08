import { styled } from 'restyle'
import { Project } from '../interfaces'
import { FC } from 'react'
import Image from 'next/image'

export const ProjectItem: FC<Props> = ({ project }) => (
  <ProjectListItem>
    <ProjectImage src={project.image} alt={project.title} height='100' width='100' />
    <ProjectContent>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectContent>
  </ProjectListItem>
)

const ProjectListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',
})

const ProjectImage = styled(Image, {})

const ProjectContent = styled('div', {
  flex: '1',
})

const ProjectTitle = styled('h3', {
  fontSize: '24px',
  fontWeight: '500',
  margin: '5px 0',
})

const ProjectDescription = styled('p', {
  fontSize: '16px',
  lineHeight: '1.6',
})

interface Props {
  project: Project
}
