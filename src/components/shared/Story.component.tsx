import React, { useMemo } from 'react'

import placeholder from 'app/assets/placeholder.svg'

import Img from 'app/components/shared/Img.component'
import Typography from 'app/components/shared/Typography'
import { styled } from 'app/stitches'
import { Category } from 'app/types/Story'

const textVerticalOverflowEllipsis = (line: number) => ({
  display: '-webkit-box',
  WebkitLineClamp: line + '',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const categoryColors: Record<string, string> = {
  sport: '$red',
  culture: '$amber',
  lifeandstyle: '$blue'
}

type StoryProps = {
  variant: 'lg' | 'md' | 'sm' | 'xs'
  category: Category
  title: string
  subtitle?: string
  thumbnail: string | null

  titleLineLimit?: number
}
const Story: React.FC<StoryProps> = ({
  title,
  subtitle,
  thumbnail,
  variant,
  category,
  titleLineLimit = 2
}) => {
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
          borderColor: categoryColors[category] ?? '$green'
        }
      }}>
      {variant !== 'xs' && (
        <Img
          placeholderSrc={placeholder}
          src={thumbnail ?? undefined}
          alt={title}
        />
      )}
      <div
        style={
          variant === 'md'
            ? {
                minHeight: '136px'
              }
            : {}
        }>
        <Typography
          css={textVerticalOverflowEllipsis(titleLineLimit)}
          variant={titleVariant}>
          {title}
        </Typography>
        {['lg', 'md'].includes(variant) && subtitle && (
          <Typography
            css={textVerticalOverflowEllipsis(2)}
            variant={'storySubtitle'}
            dangerouslySetInnerHTML={{
              __html: subtitle
            }}
          />
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
        height: '138px',
        aspectRatio: 'unset',
        '& > div': {
          height: '100%',
          position: 'unset',
          backgroundColor: '$primary'
        }
      }
    }
  }
})

export default Story
