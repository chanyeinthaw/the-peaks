import { styled } from 'app/stitches'

const Typography = styled('p', {
  fontFamily: '$serif',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  color: '$text',
  margin: 0,

  variants: {
    variant: {
      title: {
        fontSize: '48px',
        lineHeight: '49px',
        fontWeight: 700
      },
      date: {
        fontSize: '12px',
        lineHeight: '31px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.83px',
        fontFamily: '$sans'
      },
      sectionTitle: {
        fontSize: '34px',
        lineHeight: '39px',
        fontWeight: 700,
        letterSpacing: '0.07px'
      },
      storyTitleLg: {
        fontSize: '24px',
        lineHeight: '31px',
        fontWeight: 700
      },
      storyTitleMd: {
        fontSize: '20px',
        lineHeight: '29px',
        fontWeight: 700,
        letterSpacing: '0.07px'
      },
      storyTitleSm: {
        fontSize: '18px',
        lineHeight: '27px',
        fontWeight: 700,
        letterSpacing: '0.06px'
      },
      storySubtitle: {
        fontFamily: '$sans',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        letterSpacing: '0.1px'
      },
      articleTitle: {
        fontSize: '34px',
        lineHeight: '39px',
        fontWeight: 700,
        letterSpacing: '0.07px'
      },
      articleSubtitle: {
        fontSize: '20px',
        lineHeight: '26px',
        fontWeight: 700,
        letterSpacing: '0.07px'
      },
      articleBody: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        letterSpacing: '0.1px',
        fontFamily: '$sans'
      },
      caption: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
        letterSpacing: '0.3px',
        color: '$secondary',
        fontFamily: '$sans'
      }
    }
  }
})

export default Typography
