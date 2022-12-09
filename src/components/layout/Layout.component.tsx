import React from 'react'

import Footer from 'app/components/layout/Footer.component'
import Navbar from 'app/components/layout/Navbar.component'
import { styled } from 'app/stitches'

const Layout: React.FC<{
  children: React.ReactNode[] | React.ReactNode
}> = ({ children }) => {
  return (
    <LayoutRoot>
      <Navbar />
      {children}
      <Footer />
    </LayoutRoot>
  )
}

const LayoutRoot = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch'
})

export default Layout
