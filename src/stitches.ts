import { createStitches } from '@stitches/react'

export const { styled, keyframes, globalCss, theme } = createStitches({
  media: {
    downLg: '(max-width: 1280px)',

    downMd: '(max-width: 1024px)',

    downSm: '(max-width: 768px)',

    downXs: '(max-width: 480px)'
  },
  theme: {
    fonts: {
      serif: 'Georgia, serif',
      sans: 'Roboto, sans-serif'
    },
    sizes: {
      maxWidth: 'min(90vw, 1110px)'
    },
    colors: {
      primary: '#09357B',
      primaryOverlay: '#2153A3',
      primaryTransparent: 'rgba(9, 53, 123, 0.9)',

      secondary: '#5A5A59',
      secondary2: 'rgba(151, 151, 151, 1)',

      text: 'rgba(0, 0, 0, 0.87)',
      textSecondary: 'rgba(0, 0, 0, 0.54)',

      red: '#D32F2F',
      amber: '#FFC107',
      blue: '#2196F3',
      green: '#388E3C',

      grey50: '#FAFAFA',
      white: '#FFFFFF',
      black: '#212121'
    }
  }
})
