import { Ruler } from './Ruler'
import { Graph } from './Graph'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export function App() {
  const [count, setCount] = useState(0.01)
  // const [width] = useAtom(widthAtom)
  const imgProps = useSpring({
    to: { translateX: `-${count / 10}vw` },
  })
  const rulerProps = useSpring({
    to: { translateY: `-${count / 10}vh` },
  })

  let debutURL = new URL('./assets/Debut.png', import.meta.url)
  let commentCountURL = new URL('./assets/Comment-Count.png', import.meta.url)
  let sentimentURL = new URL('./assets/Sentiment-Analysis.png', import.meta.url)
  let otherGraphURL = new URL('./assets/Other-Graphs.png', import.meta.url)

  return (
    // <div className="h-screen w-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
    // <div className="h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-300">
    <div className="h-screen w-screen bg-white">
      <div
        className="grid grid-cols-5 gap-4"
        onWheel={(e) => {
          if (count + e.deltaY < 0.01) {
            setCount(0.01)
          } else if (count + e.deltaY > 8500) {
            // setCount(8000)
          } else {
            setCount(count + e.deltaY)
          }
          // setCount(count + e.deltaY < 0.01 ? 0.01 : count + e.deltaY)
        }}
      >
        <div className="col-span-2 backdrop-blur-lg z-50 bg-zinc-900/90">
          <div className="ml-28 mr-28">
            {/*<animated.div className="text-4xl text-slate-300 mt-10">*/}
            {/*  {number.to((n) => n.toFixed(0))}*/}
            {/*</animated.div>*/}
            <animated.div style={rulerProps}>
              <Ruler />
            </animated.div>
          </div>
        </div>
        <div className="col-span-3 bottom-0 h-screen">
          <animated.div style={imgProps} className="h-full">
            <Graph graphPath={debutURL} movingVh={count / 10} left={0} />
            <Graph
              graphPath={commentCountURL}
              movingVh={count / 10}
              left={250}
            />
            <Graph graphPath={sentimentURL} movingVh={count / 10} left={390} />
            <Graph graphPath={otherGraphURL} movingVh={count / 10} left={530} />
          </animated.div>
        </div>
      </div>
    </div>
  )
}
