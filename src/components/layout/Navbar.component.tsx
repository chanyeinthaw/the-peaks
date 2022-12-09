import { Link } from 'react-router-dom'

import logo from 'app/assets/logo.svg'

import SearchBox from 'app/components/layout/SearchBox.component'
import { styled } from 'app/stitches'

const Navbar = () => {
  return (
    <NavbarRoot>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <SearchBox
          css={{
            alignSelf: 'flex-end'
          }}
        />
      </div>
    </NavbarRoot>
  )
}

const NavbarRoot = styled('nav', {
  position: 'sticky',
  top: 0,

  display: 'grid',
  justifyItems: 'center',
  alignItems: 'stretch',
  height: '126px',
  backgroundColor: '$primary',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '$maxWidth'
  }
})

export default Navbar
