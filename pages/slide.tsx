import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useRef, useEffect } from 'react'
import styles from '@styles/Slide.module.scss'

function usePrevious(state: any) {
  const ref = useRef()

  useEffect(() => {
    ref.current = state
  })

  return ref.current
}

export default function Slide() {
  const tabs = ['one', 'two', 'three']
  const [current, setCurrent] = useState(tabs[0])
  const previous = usePrevious(current)

  const dir = tabs.indexOf(current) < tabs.indexOf(previous)

  return (
    <div className={styles.App}>
      <div className={styles.buttons}>
        {tabs.map((tab) => (
          <button type="button" key={tab} onClick={() => setCurrent(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <AnimatePresence custom={current}>
        <motion.div
          className={styles.content}
          key={current}
          initial="enter"
          animate="in"
          exit="exit"
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 50,
          }}
          variants={{
            enter: { x: dir ? -300 : 300, opacity: 0, scale: 0.3 },
            in: { x: 0, opacity: 1, scale: 1 },
            exit: (_current) => ({
              x: tabs.indexOf(_current) > tabs.indexOf(current) ? -300 : 300,
              opacity: 0,
              // scale: 0.3,
            }),
          }}
        >
          <h1>{current}</h1>
        </motion.div>
      </AnimatePresence>
      <h2 className={styles.footer}>footer</h2>
    </div>
  )
}
