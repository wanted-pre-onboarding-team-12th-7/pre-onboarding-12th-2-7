import styled from 'styled-components'

interface ImageBannerProps {
  alt: string
  src: string
  link: string
}

function ImageBanner({
  alt = 'alt text',
  src = 'image src',
  link = 'link url of image',
}: ImageBannerProps) {
  return (
    <AdvImage
      alt={alt}
      src={src}
      onClick={() => {
        window.open(link)
      }}
    />
  )
}

export default ImageBanner

const AdvImage = styled.img`
  cursor: pointer;
`
