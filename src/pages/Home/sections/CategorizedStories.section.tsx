import React from 'react'
import { Link } from 'react-router-dom'

import Story from 'app/components/shared/Story.component'
import StoryGroup from 'app/pages/Home/components/StoryGroup.component'
import { styled } from 'app/stitches'
import { StoryWithCategory } from 'app/types/Story'

const CategorizedStoriesSection: React.FC<{
  categorized: Record<string, StoryWithCategory[]>
}> = ({ categorized }) => {
  return (
    <SectionRoot>
      {Object.keys(categorized).map((category) => (
        <StoryGroup title={category} key={category}>
          {categorized[category].map((story) => (
            <Link to={`/story/${story.id}`} key={story.id}>
              <Story
                variant={'md'}
                category={story.category}
                title={story.title}
                subtitle={story.subtitle}
                thumbnail={story.thumbnail}
              />
            </Link>
          ))}
        </StoryGroup>
      ))}
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
