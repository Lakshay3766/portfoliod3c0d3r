import NextImage from 'next/image'
import { useState } from 'react'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, alt, className, ...rest }) => {
  const [useFallback, setUseFallback] = useState(false)
  const resolvedSrc = useFallback ? '/static/images/cyber-security-fallback.svg' : src
  const isSvg = typeof resolvedSrc === 'string' && resolvedSrc.toLowerCase().endsWith('.svg')
  const hasSize = typeof rest.width !== 'undefined' && typeof rest.height !== 'undefined'

  const handleError = () => {
    if (!useFallback) setUseFallback(true)
  }

  // When width/height missing, prefer native <img> to avoid layout issues
  if (!hasSize) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={resolvedSrc} alt={alt || ''} className={className} onError={handleError} {...rest} />
    )
  }

  if (isSvg) {
    // SVGs don't support blur placeholders; render unoptimized to avoid warnings
    return <NextImage src={resolvedSrc} alt={alt} className={className} onError={handleError} {...rest} unoptimized />
  }
  return (
    <NextImage
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...rest}
      placeholder="blur"
      blurDataURL="/static/images/SVG-placeholder.png"
    />
  )
}

export default Image
