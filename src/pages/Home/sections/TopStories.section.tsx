import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import sortByAtom from 'app/atoms/sortBy.atom'
import LoadingSpinner from 'app/components/shared/LoadingSpinner.component'
import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import useTopStoriesQuery from 'app/pages/Home/queries/useTopStoriesQuery'
import { styled } from 'app/stitches'

const TopStoriesSection = () => {
  const [sortBy] = useAtom(sortByAtom)
  const { data, isLoading } = useTopStoriesQuery({
    variables: {
      sortBy
    }
  })

  return (
    <>
      <PageTitle title={'Top stories'} />
      {isLoading && (
        <div
          style={{
            margin: '64px 0'
          }}>
          <LoadingSpinner />
        </div>
      )}
      {data && (
        <TopStoryGrid>
          <div>
            {data.highlights.map((story, idx) => {
              let variant = 'lg'
              if (idx > 0) variant = 'sm'
              if (idx > 2) variant = 'xs'

              console.log(idx, variant)

              return (
                <Link to={`/story/${story.id}`} key={story.id}>
                  <Story
                    variant={variant as any}
                    category={story.category}
                    title={story.title}
                    subtitle={story.subtitle}
                    thumbnail={story.thumbnail}
                    titleLineLimit={variant === 'xs' ? 4 : 2}
                  />
                </Link>
              )
            })}
          </div>
          <StoryGrid as={'div'}>
            {data.stories.map((story) => {
              return (
                <Link to={`/story/${story.id}`} key={story.id}>
                  <Story
                    variant={'md'}
                    category={story.category}
                    title={story.title}
                    subtitle={story.subtitle}
                    thumbnail={story.thumbnail}
                  />
                </Link>
              )
            })}
          </StoryGrid>
        </TopStoryGrid>
      )}
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
    gridTemplateColumns: '540px repeat(2, 255px)',
    gridTemplateRows: 'repeat(2, min-content)',
    gap: '30px',

    '& > a:first-child': {
      gridArea: '1 / 1 / span 2 / span 1'
    }
  }
})

export default TopStoriesSection
