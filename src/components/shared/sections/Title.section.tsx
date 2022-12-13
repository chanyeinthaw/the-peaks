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
  },

  '@downMd': {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '24px'
  },

  '@downSm': {
    '& > div': {
      flexDirection: 'column',
      alignItems: 'stretch',

      '& > button': {
        width: '100%'
      }
    },

    '& > button': {
      width: '100%'
    }
  }
})

export default TitleSection
