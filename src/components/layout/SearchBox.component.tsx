import { atom, useAtom } from 'jotai'
import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import SearchIcon from 'app/components/icons/Search.icon'
import useClickOutside from 'app/hooks/useClickOutside'
import { styled } from 'app/stitches'

export const searchQueryAtom = atom('')
export const isSearching = atom((get) => {
  const nameAtom = get(searchQueryAtom)
  return nameAtom.trim().length > 0
})

const SearchBox: React.FC<{
  css?: any
}> = ({ css }) => {
  const [query, setQuery] = useAtom(searchQueryAtom)
  const [state, setState] = useState<'closed' | undefined>('closed')
  const inputRef = useRef<HTMLInputElement>(null)
  const searchBoxRootRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const closeSearchBox = () => setState('closed')

  useClickOutside(searchBoxRootRef, closeSearchBox)

  const openSearchBox = () => {
    setState(undefined)
    inputRef.current?.focus()
  }

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0 && location.pathname !== '/search') {
      navigate('/search')
    }

    if (e.target.value.trim().length === 0 && location.pathname === '/search') {
      navigate(-1)
    }

    setQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      navigate(-1)
      closeSearchBox()
      setQuery('')
    }
  }

  return (
    <SearchBoxRoot state={state} ref={searchBoxRootRef} css={css}>
      <input
        ref={inputRef}
        type="text"
        placeholder={'Search all news'}
        value={query}
        onKeyDown={handleKeyDown}
        onChange={handleQueryChange}
      />
      <div onClick={openSearchBox}>
        <SearchIcon size={24} />
      </div>
    </SearchBoxRoot>
  )
}

const SearchBoxRoot = styled('div', {
  backgroundColor: '$primaryOverlay',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
  height: '33.5px',
  width: '300px',

  transition: '.3s ease',

  borderBottom: '2px solid $white',

  '& > input': {
    fontFamily: '$sans',

    width: '100%',
    backgroundColor: 'transparent',
    padding: '9px 16px',
    outline: 'none',
    border: 'none',
    color: '$white',

    '&::placeholder': {
      color: '$white',
      opacity: 0.7
    }
  },

  '& > div': {
    display: 'grid',
    placeItems: 'center',
    padding: '0 16px 0 0'
  },

  variants: {
    state: {
      closed: {
        backgroundColor: 'transparent',
        width: '56px',

        '& > input': {
          width: 0,
          padding: 0,
          opacity: 0
        },

        '& > div': {
          cursor: 'pointer',
          alignSelf: 'stretch',
          padding: '0 16px'
        }
      }
    }
  }
})

export default SearchBox
