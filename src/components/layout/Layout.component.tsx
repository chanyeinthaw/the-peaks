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
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </LayoutRoot>
  )
}

const LayoutContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$white'
})

const LayoutRoot = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch'
})

export default Layout
