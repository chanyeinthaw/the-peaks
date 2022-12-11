import React, { useMemo } from 'react'

import Typography from 'app/components/shared/Typography'
import { styled } from 'app/stitches'

const categoryColors = {
  sport: '$red',
  culture: '$amber',
  lifeandstyle: '$blue'
}

type StoryProps = {
  variant: 'lg' | 'md' | 'sm' | 'xs'
  category: keyof typeof categoryColors
}
const Story: React.FC<StoryProps> = ({ variant, category }) => {
  const titleVariant = useMemo(() => {
    if (['sm', 'xs'].includes(variant)) {
      return 'storyTitleSm'
    }

    if (variant === 'md') {
      return 'storyTitleMd'
    }

    return 'storyTitleLg'
  }, [variant])

  return (
    <StoryRoot
      size={variant}
      css={{
        '& > div': {
          borderColor: categoryColors[category]
        }
      }}>
      {variant !== 'xs' && (
        <img src="https://picsum.photos/200/200" alt="image" />
      )}
      <div>
        <Typography variant={titleVariant}>
          Coronavirus live news: markets fall over fears of long US
        </Typography>
        {['lg', 'md'].includes(variant) && (
          <Typography variant={'storySubtitle'}>
            Republican senators on Capitol Hill have expressed their dismay at a
            Donald Trump.
          </Typography>
        )}
      </div>
    </StoryRoot>
  )
}

const StoryRoot = styled('article', {
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',

  boxShadow: '0 0 4px 0px rgba(0,0,0,.5)',

  '&:hover': {
    boxShadow: '0 0 6px 1px rgba(0,0,0,.4)'
  },

  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '12px 10px',
    backgroundColor: '$primaryTransparent',

    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',

    '& > p': {
      color: '$white'
    }
  },

  variants: {
    size: {
      lg: {
        aspectRatio: '540 / 423'
      },
      md: {
        aspectRatio: '350 / 347'
      },
      sm: {
        aspectRatio: '255 / 252'
      },
      xs: {
        aspectRatio: '255 / 138',
        '& > div': {
          width: '100%',
          height: '100%',
          position: 'unset',
          backgroundColor: '$primary'
        }
      }
    }
  }
})

export default Story
