import { AnimatePresence, stagger, useAnimate } from 'framer-motion'
import { useScore } from '../hooks/useScore'
import { useEffect, useState } from 'react'

import { ScorePlus } from './ScorePlus'

export const Score = ({ children }: { children: JSX.Element }) => {
  const { score } = useScore()
  const [lastScore, setLastScore] = useState(score)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (score > lastScore) {
      const duration = 0.8

      animate(lastScore, score, {
        duration,
        onUpdate: latest => {
          setLastScore(Math.trunc(latest))
        }
      })
      setTimeout(() => {
        animate(
          'p',
          {
            y: [0, -10, 0],
            color: ['#2d334a', '#11A738', '#2d334a']
          },
          {
            duration,
            delay: stagger(0.1)
          }
        )

        animate(
          'div.flip',
          {
            rotateY: [0, 360]
          },
          {
            duration,
            delay: stagger(0.1)
          }
        )
      }, 850)
    } else {
      animate(
        'p',
        {
          color: ['#2d334a', '#BC2319', '#2d334a'],
          scale: [1, 1.2, 1],
          y: [0, -10, 0]
        },
        {
          duration: 0.4,
          delay: stagger(0.1)
        }
      )
      setLastScore(score)
    }
  }, [score])

  return (
    <div className="game__score" ref={scope} >
      <AnimatePresence>
        {score > lastScore && <ScorePlus />}
      </AnimatePresence>
      <div className='score'>
        {
          lastScore.toString().split('').map((charScore, key) =>
            <div className='flip' key={key}>
              <p>
                {charScore}
              </p>
            </div>
          )
        }
      </div>
      {children}
    </div>
  )
}
