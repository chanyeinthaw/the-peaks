import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RSelect from '@radix-ui/react-select'
import React from 'react'

import { styled } from 'app/stitches'

type SelectProps = {
  value: string
  items: { value: string; label: string }[]
  onChange: (value: string) => void
}
const Select: React.FC<SelectProps> = (props) => {
  const selectedItem = props.items.find((item) => item.value === props.value)!
  const otherItems = props.items.filter((item) => item.value !== props.value)

  return (
    <RSelect.Root value={props.value} onValueChange={props.onChange}>
      <SelectTrigger>
        <RSelect.Value />
        <RSelect.Icon>
          <ChevronDownIcon fontSize={24} />
        </RSelect.Icon>
      </SelectTrigger>

      <RSelect.Portal>
        <SelectContent>
          <RSelect.Viewport>
            <StyledItem value={selectedItem.value}>
              <RSelect.ItemText>{selectedItem.label}</RSelect.ItemText>
              <ChevronUpIcon />
            </StyledItem>

            {otherItems.map((item) => (
              <StyledItem value={item.value} key={item.value}>
                <RSelect.ItemText>{item.label}</RSelect.ItemText>
              </StyledItem>
            ))}
          </RSelect.Viewport>
        </SelectContent>
      </RSelect.Portal>
    </RSelect.Root>
  )
}

const SelectContent = styled(RSelect.Content, {
  backgroundColor: '$white',
  border: '1px solid rgba(0, 0, 0, 0.42)'
})

const StyledItem = styled(RSelect.Item, {
  padding: '9px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  cursor: 'pointer',
  '& > *': {
    fontFamily: '$sans'
  },
  '&[data-highlighted]': {
    outline: 'none',
    background: '$grey50'
  }
})

const SelectTrigger = styled(RSelect.Trigger, {
  cursor: 'pointer',

  width: '300px',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
  padding: '9px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',

  '& *': {
    fontFamily: '$sans'
  },
  '&:focus-visible': {
    outline: 'none'
  }
})

export default Select
