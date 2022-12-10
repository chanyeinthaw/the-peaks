import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'

const BookmarksPage = () => {
  return (
    <>
      <PageTitle title={'All bookmarks'} variant={'noBookmark'} />
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
