import { useAtom } from 'jotai'
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

import sortByAtom from 'app/atoms/sortBy.atom'
import { searchQueryAtom } from 'app/components/layout/SearchBox.component'
import Loading from 'app/components/shared/Loading.component'
import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import useDebouncedValue from 'app/hooks/useDebouncedValue'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'
import useSearchStoryQuery from 'app/queries/useSearchStoryQuery'

const SearchResultsPage = () => {
  const [query, setQuery] = useAtom(searchQueryAtom)
  const [sortBy] = useAtom(sortByAtom)
  const debouncedQuery = useDebouncedValue(query, 600)
  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useSearchStoryQuery({
    variables: {
      query: debouncedQuery,
      sortBy
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          100 <=
        document.documentElement.clientHeight

      if (isAtBottom && hasNextPage) {
        fetchNextPage().then()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasNextPage])

  if (isLoading) return <Loading />
  if (isError) throw error

  return (
    <>
      <PageTitle title={'Search results'} variant={'default'} />
      <StoryGroup
        title={''}
        css={{
          marginBottom: isFetchingNextPage ? 0 : '105px'
        }}>
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.stories.map((story) => (
              <Link
                to={`/story/${story.id}`}
                key={story.id}
                onClick={() => {
                  setQuery('')
                }}>
                <Story
                  title={story.title}
                  subtitle={story.subtitle}
                  thumbnail={story.thumbnail}
                  category={story.category}
                  variant={'md'}
                />
              </Link>
            ))}
          </Fragment>
        ))}
      </StoryGroup>
      {isFetchingNextPage && (
        <Loading
          compact={true}
          css={{
            marginTop: '24px',
            marginBottom: '24px'
          }}
        />
      )}
    </>
  )
}

export default SearchResultsPage
