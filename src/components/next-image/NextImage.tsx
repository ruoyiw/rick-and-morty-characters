import Image, { ImageProps } from 'next/image'

type NextImageProps = Pick<
  ImageProps,
  'src' | 'width' | 'height' | 'quality' | 'alt' | 'style' | 'sizes'
>

const rgbDataURL = (r: number, g: number, b: number) => {
  const svg = `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <filter id="blur" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
    </filter>
    <rect width="100%" height="100%" fill="rgb(${r}, ${g}, ${b})" filter="url(#blur)" />
  </svg>
`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString(
    'base64',
  )}`
}

export const NextImage = (props: NextImageProps) => {
  const { src, width, height, quality = 75, alt, style } = props
  return (
    <Image
      src={src}
      width={width}
      height={height}
      quality={quality}
      placeholder="blur"
      blurDataURL={rgbDataURL(200, 200, 200)}
      alt={alt || ''}
      style={style}
    />
  )
}
