import { atom, useAtom } from 'jotai'
import { useRef } from 'react'

export const widthAtom = atom(0)

export function Graph({ graphPath, left = 0 }) {
  const [, setWidth] = useAtom(widthAtom)
  const imgElement = useRef(null)
  return (
    <img
      src={graphPath}
      alt={'graphs of experiments'}
      className="overflow-hidden"
      style={{
        position: 'absolute',
        maxWidth: 'none',
        height: '60vh',
        bottom: '20vh',
        left: `${left}vw`,
      }}
      ref={imgElement}
      onLoad={() => setWidth(imgElement.current.naturalWidth)}
    />
  )
}
