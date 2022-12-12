import React, { useEffect, useState } from 'react'

import { styled } from 'app/stitches'

type ImageProps = {
  css?: any
  placeholderSrc: string
  src?: string
  alt: string
}
const Img: React.FC<ImageProps> = ({ src, alt, placeholderSrc, css }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
    }
  }, [src])

  return <ImgRoot alt={alt} src={imgSrc} css={css} />
}

const ImgRoot = styled('img', {
  objectFit: 'cover'
})

export default Img
