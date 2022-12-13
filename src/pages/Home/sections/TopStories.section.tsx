import React from 'react'
import { Link } from 'react-router-dom'

import PageTitle from 'app/components/shared/PageTitle.component'
import Story from 'app/components/shared/Story.component'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import { styled } from 'app/stitches'
import { StoryWithCategory } from 'app/types/Story'

const TopStoriesSection: React.FC<{
  highlights: StoryWithCategory[]
  stories: StoryWithCategory[]
}> = ({ highlights, stories }) => {
  return (
    <>
      <PageTitle title={'Top stories'} />
      <TopStoryGrid>
        <div>
          {highlights.map((story, idx) => {
            let variant = 'lg'
            if (idx > 0) variant = 'sm'
            if (idx > 2) variant = 'xs'

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
          {stories.map((story) => {
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
    },

    '@downLg': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'min-content, repeat(2, 200px)',

      '& > a:first-child': {
        gridArea: '1 / 1 / span 1 / span 2'
      }
    }
  },

  '@downMd': {
    '& > div:last-of-type': {
      gridTemplateColumns: '1fr 1fr 1fr'
    }
  },

  '@downXs': {
    '& > div:last-of-type': {
      gridTemplateColumns: '1fr'
    }
  }
})

export default TopStoriesSection
