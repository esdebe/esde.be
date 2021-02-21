/* eslint-disable max-len */
/* eslint-disable no-console */
import { motion } from 'framer-motion'
import styles from '@styles/Slide2.module.scss'
import { useRef, useState } from 'react'

export default function Slide() {
  const tabs = ['one', 'two', 'three']
  const [translateX] = useState(-100)
  const dragValue = useRef(0)
  const offsetValue = useRef(0)
  const directionValue = useRef('N')
  const containerRef = useRef()
  const prevRef = useRef()

  function handleDragStart() {
    dragValue.current = 0
    offsetValue.current = 0
    directionValue.current = 'N'
  }

  function handleDragEnd() {
  }

  function handleDrag(event, info) {
    if (offsetValue.current !== info.offset.x) {
      offsetValue.current = info.offset.x
      dragValue.current += 1
      directionValue.current = info.delta.x > 0 ? 'L' : 'R'
      console.log(
        [
          directionValue.current,
        ]
      )
    }
  }

  return (
    <div className={styles.App}>
      <div ref={containerRef} className={styles.container} id="cont">
        <motion.div
          drag="x"
          className={styles.track}
          dragConstraints={containerRef}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrag={handleDrag}
          dragMomentum={false}
          dragElastic={1}
          transition={{
            x: {
              type: 'spring',
              mass: 0.5,
              stiffness: 500,
              damping: 50,
            },
          }}
        >
          <div ref={prevRef} className={styles.content} style={{ transform: `translateX(${translateX}%)` }}>
            {tabs[0]}
          </div>
          <div className={styles.content} style={{ transform: `translateX(${translateX}%)` }}>
            {tabs[1]}
          </div>
          <div className={styles.content} style={{ transform: `translateX(${translateX}%)` }}>
            {tabs[2]}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
