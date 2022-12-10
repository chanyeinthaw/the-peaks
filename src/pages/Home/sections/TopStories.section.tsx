import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import sortByAtom, { sortOptions } from 'app/atoms/sortBy.atom'
import BookmarkIcon from 'app/components/icons/Bookmark.icon'
import Button from 'app/components/shared/Button.component'
import Select from 'app/components/shared/Select.component'
import Story from 'app/components/shared/Story.component'
import Typography from 'app/components/shared/Typography'
import TitleSection from 'app/components/shared/sections/Title.section'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import { styled } from 'app/stitches'

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
          <Link to={'/bookmarks'}>
            <Button Icon={BookmarkIcon}>View bookmark</Button>
          </Link>
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

export default TopStoriesSection
