import { Title } from './Title'
import { Description } from './Description'

export function ProjectName({ title, illustration, top }) {
  return (
    <div style={{ position: 'absolute', top: `${top}vh` }}>
      <Title>{title}</Title>
      <Description>{illustration}</Description>
    </div>
  )
}
