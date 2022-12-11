import React from 'react'

import { SvgIconProps } from 'app/components/shared/SvgIcon.component'
import Typography from 'app/components/shared/Typography'
import { styled, theme } from 'app/stitches'

type CustomToastProps = {
  Icon: React.ComponentType<SvgIconProps>
  title: string
  backgroundColor: keyof typeof theme.colors
  onClick: () => void
  css?: any
}

const CustomToast: React.FC<CustomToastProps> = (props) => {
  return (
    <CustomToastRoot
      onClick={props.onClick}
      css={{
        backgroundColor: `$${props.backgroundColor}`,
        ...props.css
      }}>
      <props.Icon size={18} />
      <Typography
        css={{
          color: '$white',
          textTransform: 'uppercase',
          fontFamily: '$sans',
          fontSize: '14px',
          fontWeight: 500
        }}>
        {props.title}
      </Typography>
    </CustomToastRoot>
  )
}

const CustomToastRoot = styled('div', {
  zIndex: 10000,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  width: '100%'
})
export default CustomToast
