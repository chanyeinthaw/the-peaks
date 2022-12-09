import { styled } from 'app/stitches'

const Footer = () => {
  return <FooterRoot />
}

const FooterRoot = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-end',
  backgroundColor: '$primary',
  height: '243px'
})

export default Footer
