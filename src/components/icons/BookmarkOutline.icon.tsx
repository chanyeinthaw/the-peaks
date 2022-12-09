import React from 'react'

import SvgIcon, { SvgIconProps } from 'app/components/shared/SvgIcon.component'

const BookmarkOutline: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 18 18'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 2.25H12.75C13.575 2.25 14.25 2.925 14.25 3.75V15.75L9 13.5L3.75 15.75V3.75C3.75 2.925 4.425 2.25 5.25 2.25ZM9 11.865L12.75 13.5V4.5C12.75 4.0875 12.4125 3.75 12 3.75H6C5.5875 3.75 5.25 4.0875 5.25 4.5V13.5L9 11.865Z"
        fill="white"
      />
    </SvgIcon>
  )
}

export default BookmarkOutline
