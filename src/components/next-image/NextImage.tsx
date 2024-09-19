import Image from 'next/image'
import { Box } from '@chakra-ui/react'

type LoaderProps = {
  src: string
  width: number
  quality?: number
}

const imgLoader = ({ src, width, quality }: LoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const plainLoader = ({ src }: LoaderProps) => {
  return src
}

type ImageProps = {
  src: string
  width: number
  height: number
  quality?: number
  alt?: string
  noQuery?: boolean
  noPlaceholder?: boolean
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const imageStyles = {
  flex: 1,
  '.next-image': {
    position: 'absolute',
    inset: '0px',
    boxSizing: 'border-box',
    padding: '0px',
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: '0px',
    height: '0px',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    filter: 'none',
    backgroundSize: 'cover',
    backgroundImage: 'none',
    backgroundPosition: '0% 0%',
  },
}

export const NextImage = (props: ImageProps) => {
  const {
    src,
    width,
    height,
    quality,
    alt,
    noQuery = false,
    noPlaceholder = false,
  } = props
  return (
    <Box style={imageStyles}>
      <Image
        className="next-image"
        loader={noQuery ? plainLoader : imgLoader}
        src={src}
        width={width}
        height={height}
        layout="fixed"
        quality={quality}
        {...(noPlaceholder
          ? {}
          : {
              placeholder: 'blur',
              blurDataURL: rgbDataURL(188, 202, 215),
            })}
        alt={alt || ''}
      />
    </Box>
  )
}
