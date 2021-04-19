import {useSpring, animated} from 'react-spring'
import styles from './styles.module.css'

export default function Simple() {
  const rotation = useSpring({
    loop: {reverse: true},
    config: { mass: 2, tension: 180, friction: 15 },
    from: {
      rotateZ: 0,
      x: -20,
      y: -20
    },
    to: {
      rotateZ: 360,
      x: 20,
      y: 20
    },
  })

  return <animated.div
    className={styles.item}
    style={{
      width: 100,
      height: 100,
      ...rotation
    }}>A</animated.div>

}
