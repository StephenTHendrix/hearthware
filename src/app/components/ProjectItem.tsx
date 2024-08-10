import { styled } from 'restyle'
import { Project } from '../interfaces'
import { FC } from 'react'
import Image from 'next/image'
import { brandGreen, brandOrange, brandWhite, brandYellow } from '../constants/styles'

export const ProjectItem: FC<Props> = ({ project }) => (
  <ProjectListItem>
    <ProjectImage src={project.image} alt={project.title} height={75} width={150} />
    <ProjectContent>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
    </ProjectContent>
  </ProjectListItem>
)

const ProjectListItem = styled('li', {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
})

const ProjectImage = styled(Image, {
  backgroundColor: brandWhite,
  borderRadius: '8px',
  padding: '5px',
})

const ProjectContent = styled('div', {})

const ProjectTitle = styled('span', {
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: 0,
})

const ProjectDescription = styled('p', {
  fontSize: '16px',
  lineHeight: '1.6',
})

interface Props {
  project: Project
}
