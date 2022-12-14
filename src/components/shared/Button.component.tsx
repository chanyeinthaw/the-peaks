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
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
  fontFamily: '$sans',
  fontSize: '13px',
  lineHeight: '22px',
  fontWeight: 500,
  textTransform: 'uppercase',
  width: 'fit-content',
  cursor: 'pointer',
  transition: '.3s ease',
  '&:active': {
    scale: 0.97
  },
  '&:hover': {
    backgroundColor: '$primaryTransparent'
  }
})

export default Button
