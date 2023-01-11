import { Description } from './Description'
import { Date } from './Date'

export function Events({ date, illustration, top }) {
  return (
    <div style={{ position: 'absolute', top: `${top}vh` }}>
      <Date>{date}</Date>
      <Description>{illustration}</Description>
    </div>
  )
}
