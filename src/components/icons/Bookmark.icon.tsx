import React from 'react'

import SvgIcon, { SvgIconProps } from 'app/components/shared/SvgIcon.component'

const Bookmark: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 18 18'}>
      <path
        d="M12.75 2.25H5.25C4.425 2.25 3.75 2.925 3.75 3.75V15.75L9 13.5L14.25 15.75V3.75C14.25 2.925 13.575 2.25 12.75 2.25Z"
        fill="white"
      />
    </SvgIcon>
  )
}

export default Bookmark
