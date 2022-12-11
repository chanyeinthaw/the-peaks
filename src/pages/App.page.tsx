import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import Layout from 'app/components/layout/Layout.component'
import { globalCss } from 'app/stitches'

const globalStyles = globalCss({
  body: {
    fontFamily: '$serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,

    boxSizing: 'border-box'
  },
  'html, body': { margin: 0, padding: 0 },
  a: {
    textDecoration: 'none'
  }
})

function AppPage() {
  globalStyles()

  return (
    <Layout>
      <Outlet />
      <Toaster
        position="bottom-center"
        containerStyle={{
          margin: '-16px'
        }}
      />
    </Layout>
  )
}

export default AppPage
