import { motion } from 'framer-motion'

import { getRandom } from '../utils'

export const ScorePlus = () => {
  const clientHeight = document.querySelector('.game__score')?.clientHeight ?? 0
  const clientWidth = document.querySelector('.game__score')?.clientWidth ?? 0

  const coord = {
    x: getRandom({ min: 0, max: clientWidth }),
    y: getRandom({ min: 0, max: clientHeight / 2 })
  }

  return (
    <motion.div className='score__plus'
      initial={{
        fontWeight: 700,
        opacity: 0,
        left: coord.x,
        top: coord.y,
        scale: 1
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.8
      }}
      exit={{
        scale: 2.2,
        top: 0,
        opacity: 0
      }}
      style={{
        color: '#11A738'
      }}>
      + 1000
    </motion.div>
  )
}
