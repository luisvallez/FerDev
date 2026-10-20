import { useState } from "react"

type ImagePlaceholderProps = {
  src: string
  alt: string
  wide?: boolean
}

export function ImagePlaceholder({
  src,
  alt,
  wide = false,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)
  const className = `shot${wide ? " wide" : ""}${failed ? " empty" : ""}`

  return (
    <figure className={className}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  )
}
