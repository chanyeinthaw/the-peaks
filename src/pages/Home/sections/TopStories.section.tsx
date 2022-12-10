import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import { styled } from 'app/stitches'

const TopStoriesSection = () => {
  return (
    <>
      <PageTitle title={'Top stories'} />
      <TopStoryGrid>
        <div>
          <Story category={'sport'} variant={'lg'} />
          <Story category={'sport'} variant={'sm'} />
          <Story category={'sport'} variant={'sm'} />
          <Story category={'culture'} variant={'xs'} />
          <Story category={'culture'} variant={'xs'} />
        </div>
        <StoryGrid as={'div'}>
          <Story category={'lifeandstyle'} variant={'md'} />
          <Story category={'lifeandstyle'} variant={'md'} />
          <Story category={'lifeandstyle'} variant={'md'} />
        </StoryGrid>
      </TopStoryGrid>
    </>
  )
}

const TopStoryGrid = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '$maxWidth',
  gap: '30px',
  marginBottom: '50px',

  '& > div': {
    display: 'grid'
  },

  '& > div:first-of-type': {
    gridTemplateColumns: '540px repeat(2, auto)',
    gridTemplateRows: 'repeat(2, auto)',
    gap: '30px',

    '& > div:first-child': {
      gridArea: '1 / 1 / span 2 / span 1'
    }
  }
})

export default TopStoriesSection
