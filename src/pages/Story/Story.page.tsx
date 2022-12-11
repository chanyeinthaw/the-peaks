import Bookmark from 'app/components/icons/Bookmark.icon'
import Button from 'app/components/shared/Button.component'
import Typography from 'app/components/shared/Typography'
import { styled } from 'app/stitches'

const StoryPage = () => {
  return (
    <StoryPageRoot>
      <Button Icon={Bookmark}>Add bookmark</Button>
      <Typography
        css={{
          marginTop: '8px'
        }}
        variant={'date'}>
        Fri 12 Jun 2020 06.40 BST
      </Typography>
      <article>
        <div className={'article-head'}>
          <Typography variant={'articleTitle'}>
            Global report: WHO warns of accelerating Covid-19 infections in
            Africa
          </Typography>
          <Typography variant={'articleSubtitle'}>
            Continent is seeing more cases spread to the provinces; Trump
            supporters can’t sue over catching Covid-19 at rallies; Brazil
            confirms 30,000 new cases
          </Typography>
        </div>
        <Typography
          as={'div'}
          className={'article-body'}
          variant={'articleBody'}>
          Est commodo dolore nostrud elit et laborum mollit minim esse
          exercitation mollit ex ullamco. Commodo nostrud do velit. Est ullamco
          tempor velit cillum dolore commodo ipsum est. Duis do cillum laboris
          officia aute irure occaecat exercitation proident dolore nostrud anim
          consectetur consequat. Est commodo dolore nostrud elit et laborum
          mollit minim esse exercitation mollit ex ullamco. Commodo nostrud do
          velit. Est ullamco tempor velit cillum dolore commodo ipsum est. Duis
          do cillum laboris officia aute irure occaecat exercitation proident
          dolore nostrud anim consectetur consequat.
        </Typography>
        <div className={'article-image'}>
          <img src={'https://picsum.photos/200/200'} alt={'image'} />
          <Typography variant={'caption'}>
            A woman walks along a flooded road amidst a storm in the
            Masiphumelele informal settlement in Cape Town Photograph: Nic
            Bothma/EPA
          </Typography>
        </div>
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
