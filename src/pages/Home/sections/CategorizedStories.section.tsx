import Story from 'app/components/shared/Story.component'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'
import { styled } from 'app/stitches'

const CategorizedStoriesSection = () => {
  return (
    <SectionRoot>
      <StoryGroup title={'Sport'}>
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
      </StoryGroup>

      <StoryGroup title={'Culture'}>
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
      </StoryGroup>

      <StoryGroup title={'Life Style'}>
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
        <Story category={'sport'} variant={'md'} />
      </StoryGroup>
    </SectionRoot>
  )
}

const SectionRoot = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '$maxWidth',
  gap: '50px',
  marginBottom: '105px'
})

export default CategorizedStoriesSection
