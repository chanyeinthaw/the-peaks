import React from 'react'

import Typography from 'app/components/shared/Typography'
import StoryGrid from 'app/pages/Home/components/StoryGrid.component'
import { styled } from 'app/stitches'

type StoryGroupProps = {
  title: string
  children: React.ReactNode[]
  css?: any
}

const StoryGroup: React.FC<StoryGroupProps> = ({ title, children, css }) => {
  return (
    <StoryGroupRoot css={css}>
      <Typography variant={'sectionTitle'}>{title}</Typography>
      <StoryGrid as={'div'}>{children}</StoryGrid>
    </StoryGroupRoot>
  )
}

const StoryGroupRoot = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '30px',
  width: '$maxWidth'
})

export default StoryGroup
