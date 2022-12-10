import { useAtom } from 'jotai'

import sortByAtom, { sortOptions } from 'app/atoms/sortBy.atom'
import Select from 'app/components/shared/Select.component'
import Story from 'app/components/shared/Story.component'
import Typography from 'app/components/shared/Typography'
import TitleSection from 'app/components/shared/sections/Title.section'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'

const BookmarksPage = () => {
  const [sortBy, setSortBy] = useAtom(sortByAtom)

  return (
    <>
      <TitleSection
        css={{
          margin: '44px 0 '
        }}>
        <Typography variant={'title'}>All bookmarks</Typography>
        <Select
          value={sortBy}
          items={sortOptions}
          onChange={(value) => setSortBy(value)}
        />
      </TitleSection>
      <StoryGroup
        title={''}
        css={{
          marginBottom: '105px'
        }}>
        <Story category={'lifeandstyle'} variant={'md'} />
        <Story category={'lifeandstyle'} variant={'md'} />
        <Story category={'lifeandstyle'} variant={'md'} />
      </StoryGroup>
    </>
  )
}

export default BookmarksPage
