import { styled } from 'app/stitches'

const TitleSection = styled('section', {
  display: 'flex',
  width: '$maxWidth',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: '22px'
  }
})

export default TitleSection
