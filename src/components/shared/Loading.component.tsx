import ProgressCircularIcon from 'app/components/icons/ProgressCircular.icon'
import { keyframes, styled } from 'app/stitches'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const Loading = () => {
  return (
    <LoadingRoot>
      <ProgressCircularIcon size={48} />
    </LoadingRoot>
  )
}

const LoadingRoot = styled('div', {
  display: 'grid',
  placeItems: 'center',
  minHeight: 'calc(100vh - 369px)',

  animation: `${spin} 1s linear infinite`
})

export default Loading
