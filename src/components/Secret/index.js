import {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import styles from './styles.module.css'

export default function Secret() {
  const [state, toggle] = useState(false)

  const {x} = useSpring({
    x: state ? 1 : 0,
    from: {x: 0},
    config: { duration: 1000 }
  })

  return (
    <animated.div
      className={styles.container}
      style={{
        scale: x.to({
          range: [0, 0.25, 0.5, .75, 1],
          output: [1, 0.9, 0.8, 1, 1.25],
        }),
        width: x.to({
          range: [0, .25, 1],
          output: [20, 25, 150]
        })
      }}
      onClick={() => toggle(s => !s)}>
      <span className={styles.mark}>?</span>
      <animated.span
        className={styles.secret}
        style={{
          opacity: x.to({
            range: [0, .5, 1],
            output: [0, .2, 1]
          })
        }}>
          secret
        </animated.span>
    </animated.div>
  )

}
