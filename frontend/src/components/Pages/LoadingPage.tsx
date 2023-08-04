import { useEffect, useState } from 'react'
import { useStartGame } from '../../hooks/useStartGame'
import { useGameState } from '../../hooks/useGameState'
import { GAME_STATES } from '../../context/GameState'
import { useScore } from '../../hooks/useScore'
import { motion, AnimatePresence } from 'framer-motion'
export const LoadingPage = () => {
  const [countdown, setCountdown] = useState(3)
  const { handleStart, loading } = useStartGame()
  const { changeStateGame } = useGameState()
  const { resetScore } = useScore()
  useEffect(() => {
    handleStart()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1500)

    if (!loading && countdown === 0) {
      resetScore()
      changeStateGame(GAME_STATES.GAME_CURRENT)
    }

    return () => { clearInterval(timer) }
  }, [countdown])

  return (
    <section className='game__loading'>
      <h2>El juego empezara en:</h2>

        <AnimatePresence>
        <motion.h2
        className='game__loading__countdown'
          exit={{ y: 40, opacity: 0, position: 'absolute' }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          key={`countdown${countdown}`}
        >
          {countdown}
        </motion.h2>
        </AnimatePresence>

    </section>
  )
}
