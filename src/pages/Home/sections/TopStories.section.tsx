import { atom, useAtom } from 'jotai'

import BookmarkIcon from 'app/components/icons/Bookmark.icon'
import Button from 'app/components/shared/Button.component'
import Select from 'app/components/shared/Select.component'
import Story from 'app/components/shared/Story.component'
import Typography from 'app/components/shared/Typography'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import { styled } from 'app/stitches'

export const sortByAtom = atom('newest')

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Most Popular', value: 'relevance' }
]

const TopStoriesSection = () => {
  const [sortBy, setSortBy] = useAtom(sortByAtom)

  return (
    <>
      <TitleSection
        css={{
          margin: '44px 0 30px'
        }}>
        <Typography variant={'title'}>Top stories</Typography>
        <div>
          <Button Icon={BookmarkIcon}>View bookmark</Button>
          <Select
            value={sortBy}
            items={sortOptions}
            onChange={(value) => setSortBy(value)}
          />
        </div>
      </TitleSection>

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

const TitleSection = styled('section', {
  display: 'flex',
  width: '$maxWidth',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: '22px'
  }
})

export default TopStoriesSection
