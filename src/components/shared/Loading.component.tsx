import React from 'react'

import LoadingSpinner from 'app/components/shared/LoadingSpinner.component'
import { styled } from 'app/stitches'

const Loading: React.FC<{
  compact?: boolean
  css?: any
}> = ({ compact = false, css = {} }) => {
  return (
    <LoadingRoot
      css={{
        ...css,
        ...(compact && {
          minHeight: 'unset'
        })
      }}>
      <LoadingSpinner />
    </LoadingRoot>
  )
}

const LoadingRoot = styled('div', {
  display: 'grid',
  placeItems: 'center',
  minHeight: 'calc(100vh - 369px)'
})

export default Loading
