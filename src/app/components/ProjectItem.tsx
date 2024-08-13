import { styled } from 'restyle'
import { FC } from 'react'
import Image from 'next/image'
import { Project } from '../interfaces'
import { brandWhite, brandYellow } from '../constants/styles'
import { ArrowUpRight } from '../svg/ArrowUpRight'

export const ProjectItem: FC<Props> = ({ project }) => {
  const clickable = !!project.url

  const Content = (
    <ProjectListItem clickable={clickable}>
      <ProjectImage src={project.image} alt={project.title} height={75} width={150} />
      <ProjectContent>
        <TitleContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ArrowUpRight fill={brandWhite} />
        </TitleContainer>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectContent>
    </ProjectListItem>
  )

  return clickable ? (
    <StyledLink href={project.url!} target='_blank' rel='noopener noreferrer'>
      {Content}
    </StyledLink>
  ) : (
    Content
  )
}

const ProjectListItem = styled('li', (props: { clickable: boolean }) => ({
  display: 'flex',
  gap: '20px',
  margin: '0 -20px',
  padding: '20px',
  borderRadius: '8px',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  cursor: props.clickable ? 'pointer' : 'default',

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      backgroundColor: '#f5f5f51a',
    },

    ...(props.clickable && {
      '&:hover svg': {
        transform: 'translate(5px, -5px)',
        fill: brandYellow,
      },
      '&:hover span': {
        color: brandYellow,
      },
    }),
  },

  '@media (max-width: 768px)': {
    flexDirection: 'column-reverse',
  },
}))

const ProjectImage = styled(Image, {
  backgroundColor: brandWhite,
  borderRadius: '8px',
  padding: '5px',
})

const ProjectContent = styled('div', {})

const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    transition: 'transform 0.2s ease',
  },
})

const ProjectTitle = styled('span', {
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: 1.2,
  marginRight: '5px',
  transition: 'color 0.2s ease',
  wordWrap: 'break-word',
  whiteSpace: 'normal',  
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: brandWhite,
})

const ProjectDescription = styled('p', {
  fontSize: '16px',
})

interface Props {
  project: Project
}
