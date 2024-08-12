import { styled } from 'restyle'
import { FC } from 'react'
import Image from 'next/image'
import { Project } from '../interfaces'
import { brandWhite } from '../constants/styles'

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
  margin: '0 -20px',
  padding: '20px',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  cursor: 'default',

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      backgroundColor: '#f5f5f51a',
    },
  },

  '@media (max-width: 768px)': {
    flexDirection: 'column-reverse',
  },
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
})

interface Props {
  project: Project
}
