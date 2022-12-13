import React from 'react'

import { styled, theme } from 'app/stitches'

export type SvgIconProps = {
  size?: number
  color?: keyof typeof theme.colors
  viewBox?: string
  children?: React.ReactNode[] | React.ReactNode
  css?: any
}

const SvgIcon: React.FC<SvgIconProps> = ({
  children,
  color,
  viewBox,
  size = 24,
  css
}) => {
  return (
    <StyledSvgIcon
      width={size}
      height={size}
      className={SvgIconClasses.root}
      css={{
        ...css,
        ...(color && {
          '& path': {
            fill: theme.colors[color]
          }
        })
      }}
      viewBox={viewBox}>
      {children}
    </StyledSvgIcon>
  )
}

const StyledSvgIcon = styled('svg', {})

export const SvgIconClasses = {
  root: 'App-SvgIcon'
}

export default SvgIcon
