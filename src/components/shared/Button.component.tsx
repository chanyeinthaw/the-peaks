import React from 'react'

import { SvgIconProps } from 'app/components/shared/SvgIcon.component'
import { styled } from 'app/stitches'

const Button: React.FC<{
  Icon?: React.ComponentType<SvgIconProps>
  onClick?: () => void
  children: string
}> = ({ Icon, onClick, children }) => {
  return (
    <ButtonRoot onClick={onClick}>
      {Icon && <Icon size={18} />}
      {children}
    </ButtonRoot>
  )
}

const ButtonRoot = styled('button', {
  backgroundColor: '$primary',
  color: '$white',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  padding: '4px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$sans',
  fontSize: '13px',
  lineHeight: '22px',
  fontWeight: 500,
  textTransform: 'uppercase',
  width: 'fit-content',
  cursor: 'pointer',
  '&:focus, &:focus-visible': {
    outline: '2px solid $primaryOverlay'
  },
  '&:hover': {
    backgroundColor: '$primaryTransparent'
  }
})

export default Button
