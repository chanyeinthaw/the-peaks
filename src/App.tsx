import React from 'react'
import { RouterProvider } from 'react-router-dom'

import router from 'app/router'
import { globalCss } from 'app/stitches'

const globalStyles = globalCss({
  '*': {
    fontFamily: '$serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,

    boxSizing: 'border-box'
  },
  'html, body': { margin: 0, padding: 0 }
})

function App() {
  globalStyles()

  return <RouterProvider router={router} />
}

export default App
