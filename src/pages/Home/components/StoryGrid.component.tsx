import { styled } from 'app/stitches'

const StoryGrid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',

  '@downSm': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  '@downXs': {
    gridTemplateColumns: '1fr'
  }
})

export default StoryGrid
