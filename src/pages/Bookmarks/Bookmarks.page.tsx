import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import sortByAtom from 'app/atoms/sortBy.atom'
import { searchQueryAtom } from 'app/components/layout/SearchBox.component'
import Loading from 'app/components/shared/Loading.component'
import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import useBookmarksQuery from 'app/pages/Bookmarks/queries/useBookmarksQuery'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'

const BookmarksPage = () => {
  const [, setQuery] = useAtom(searchQueryAtom)
  const [sortBy] = useAtom(sortByAtom)
  const { data: bookmarks, isLoading } = useBookmarksQuery({
    variables: sortBy
  })

  if (isLoading) return <Loading />

  return (
    <>
      <PageTitle title={'All bookmarks'} variant={'noBookmark'} />
      <StoryGroup
        title={''}
        css={{
          paddingBottom: '105px',
          minHeight: 'calc(100vh - 567px)'
        }}>
        {bookmarks!.map(({ story }) => (
          <Link
            to={`/story/${story.id}`}
            key={story.id}
            onClick={() => {
              setQuery('')
            }}>
            <Story
              title={story.title}
              thumbnail={story.thumbnail}
              variant={'md'}
              category={story.category}
              titleLineLimit={4}
            />
          </Link>
        ))}
      </StoryGroup>
    </>
  )
}

export default BookmarksPage
