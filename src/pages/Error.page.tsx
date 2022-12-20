import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

import Typography from 'app/components/shared/Typography'
import { styled } from 'app/stitches'

const ErrorPage = () => {
  const error = useRouteError() as any

  return (
    <ErrorPageRoot>
      <Typography>
        {error.statusText === 'Not Found' && 'You got lost? '}
        {error.statusText !== 'Not Found' && 'Oops! Something went wrong. '}
        <Link to={'/'}>
          <Typography
            css={{
              textDecoration: 'underline'
            }}
            as="span">
            Go to home page.
          </Typography>
        </Link>
      </Typography>
      {error.statusText !== 'Not Found' && (
        <Typography
          css={{
            padding: '4px 8px',
            background: '$grey50',
            color: '$secondary2',
            fontFamily: '$sans'
          }}>
          {error.message}
        </Typography>
      )}
    </ErrorPageRoot>
  )
}

const ErrorPageRoot = styled('div', {
  display: 'grid',
  placeContent: 'center',
  gap: '8px',
  gridTemplateRows: 'min-content min-content',
  minHeight: 'calc(100vh - 369px)'
})

export default ErrorPage
