import React from 'react'

import ProgressCircularIcon from 'app/components/icons/ProgressCircular.icon'
import { keyframes } from 'app/stitches'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const LoadingSpinner = () => {
  return (
    <ProgressCircularIcon
      size={48}
      css={{
        animation: `${spin} 1s linear infinite`
      }}
    />
  )
}

export default LoadingSpinner
