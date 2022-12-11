import { useLocation } from 'react-router-dom'

import Bookmark from 'app/components/icons/Bookmark.icon'
import Button from 'app/components/shared/Button.component'
import Loading from 'app/components/shared/Loading.component'
import Typography from 'app/components/shared/Typography'
import useStoryQuery from 'app/pages/Story/queries/useStoryQuery'
import { styled } from 'app/stitches'

const StoryPage = () => {
  const location = useLocation()
  const storyId = location.pathname.replace('/story/', '')
  const { data, isLoading, isError, error } = useStoryQuery({
    variables: {
      id: storyId
    }
  })

  if (isError) throw error
  if (isLoading) return <Loading />

  return (
    <StoryPageRoot>
      <Button Icon={Bookmark}>Add bookmark</Button>
      <Typography
        css={{
          marginTop: '8px'
        }}
        variant={'date'}>
        {data?.date.format('ddd D MMM YYYY HH.mm z')}
      </Typography>
      <article>
        <div className={'article-head'}>
          <Typography variant={'articleTitle'}>{data?.title}</Typography>
          <Typography
            variant={'articleSubtitle'}
            dangerouslySetInnerHTML={{ __html: data?.subtitle ?? '' }}
          />
        </div>
        <Typography
          as={'div'}
          className={'article-body'}
          variant={'articleBody'}
          dangerouslySetInnerHTML={{ __html: data?.body ?? '' }}
        />
        {data?.thumbnail && (
          <div className={'article-image'}>
            <img src={data.thumbnail} alt={'image'} />
            {/*<Typography variant={'caption'}>*/}
            {/*  A woman walks along a flooded road amidst a storm in the*/}
            {/*  Masiphumelele informal settlement in Cape Town Photograph: Nic*/}
            {/*  Bothma/EPA*/}
            {/*</Typography>*/}
          </div>
        )}
      </article>
    </StoryPageRoot>
  )
}

const StoryPageRoot = styled('section', {
  padding: '63px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '$maxWidth',
  gap: '10px',
  minHeight: 'calc(100vh - 369px)',

  '& article': {
    display: 'grid',
    gridTemplateColumns: '1fr 445px',
    gridTemplateRows: 'repeat(2, auto)',
    gridTemplateAreas: `
      'article-head .'
      'article-body article-image'
    `,
    rowGap: '14px',
    columnGap: '30px',

    '& .article-head': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      paddingBottom: '14px',
      borderBottom: '1px solid rgba(151, 151, 151, 1)',
      gridArea: 'article-head'
    },

    '& .article-body': {
      gridArea: 'article-body'
    },

    '& .article-image': {
      gridArea: 'article-image',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '10px',

      '& img': {
        objectFit: 'cover',
        aspectRatio: '16/9'
      }
    }
  }
})

export default StoryPage
