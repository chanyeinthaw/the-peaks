import React from 'react'
import { Outlet } from 'react-router-dom'

import Layout from 'app/components/layout/Layout.component'
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

function AppPage() {
  globalStyles()

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default AppPage
