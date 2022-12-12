import { useAtom } from 'jotai'
import React from 'react'
import { Link } from 'react-router-dom'

import sortByAtom, { sortOptions } from 'app/atoms/sortBy.atom'
import BookmarkIcon from 'app/components/icons/Bookmark.icon'
import Button from 'app/components/shared/Button.component'
import Select from 'app/components/shared/Select.component'
import Typography from 'app/components/shared/Typography'
import TitleSection from 'app/components/shared/sections/Title.section'

type PageTitleProps = {
  title: string
  variant?: 'default' | 'noBookmark'
}
const PageTitle: React.FC<PageTitleProps> = ({
  title,
  variant = 'default'
}) => {
  const [sortBy, setSortBy] = useAtom(sortByAtom)

  let options = sortOptions
  if (variant === 'noBookmark') {
    options = [
      {
        label: 'Bookmarked date',
        value: 'bookmarked'
      },
      ...sortOptions
    ]

    options.pop()
  }

  const select = (
    <Select
      value={sortBy}
      items={options}
      onChange={(value) => setSortBy(value)}
    />
  )

  return (
    <TitleSection
      css={{
        margin: '44px 0 30px',
        ...(variant === 'noBookmark' && {
          marginBottom: 0
        })
      }}>
      <Typography variant={'title'}>{title}</Typography>
      {variant === 'default' && (
        <div>
          <Link to={'/bookmarks'}>
            <Button Icon={BookmarkIcon}>View bookmark</Button>
          </Link>
          {select}
        </div>
      )}
      {variant === 'noBookmark' && select}
    </TitleSection>
  )
}

export default PageTitle
