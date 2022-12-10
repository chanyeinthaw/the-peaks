import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import logo from 'app/assets/logo.svg'

import SearchBox, {
  searchQueryAtom
} from 'app/components/layout/SearchBox.component'
import { styled } from 'app/stitches'

const Navbar = () => {
  const [, setQuery] = useAtom(searchQueryAtom)
  const resetSearch = () => setQuery('')
  return (
    <NavbarRoot>
      <div>
        <Link to={'/'} onClick={resetSearch}>
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
  zIndex: 1,
  position: 'sticky',
  top: 0,
  boxShadow: '0 2px 8px 0px rgba(0,0,0,.3)',

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
