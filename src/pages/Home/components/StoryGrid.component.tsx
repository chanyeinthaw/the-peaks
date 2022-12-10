import { styled } from 'app/stitches'

const StoryGrid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px'
})

export default StoryGrid
