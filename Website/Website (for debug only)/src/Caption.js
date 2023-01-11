import { Description } from './Description'

export function Caption({ illustration, top }) {
  return (
    <div style={{ position: 'absolute', top: `${top}vh` }}>
      <Description>{illustration}</Description>
    </div>
  )
}
