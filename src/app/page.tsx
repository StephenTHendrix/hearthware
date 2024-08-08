import { styled } from 'restyle'
import { ExperienceSection } from './components/ExperienceSection'
import { experienceData, projectData } from './data'
import { ProjectSection } from './components/ProjectSection'

export default function Page() {
  return (
    <PageContainer>
      <StickyColumn>
        <IntroTitle>Hi! I'm Stephen.</IntroTitle>
        <IntroDescription>
          I make Hearthware — a term for software crafted by a close-knit, collaborative team, designed to serve
          communities, improve lives, and make room at the table for all.
        </IntroDescription>
      </StickyColumn>
      <Column>
        <IntroDescription>
          I began my career in education while still in college, tutoring for both Breakthrough Collaborative and the
          Simon Scholars Foundation, helping underserved middle and high school students in Santa Fe become the first
          college graduates in their families. I followed this path for five more years, eventually becoming a certified
          teacher in Dallas ISD and collecting a few fridge door's worth of student notes and letters along the way.
          <br />
          <br />
          Since then, I've spent the last 5 years working my way toward becoming a senior software engineer, doing
          everything from being the sole developer at a startup to leading cross-functional team efforts at iHeartMedia
          and VShift.
        </IntroDescription>

        <ExperienceSection experienceData={experienceData} />
        <ProjectSection projectData={projectData} />
      </Column>
    </PageContainer>
  )
}

const PageContainer = styled('div', {
  display: 'flex',
  padding: '40px',
  gap: '20px',
})

const Column = styled('div', {
  flex: '1 1',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

const StickyColumn = styled(Column, {
  position: 'sticky',
  top: '0',
  alignSelf: 'flex-start',
  height: 'fit-content',
})

const IntroTitle = styled('h1', {
  fontSize: '48px',
  fontWeight: '700',
  margin: '0 0 10px 0',
})

const IntroDescription = styled('p', {
  maxWidth: '600px',
  fontSize: '18px',
})
