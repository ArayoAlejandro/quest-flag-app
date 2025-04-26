import { useEffect } from 'react'
import { useFlags } from '../../hooks/useFlags'
import { useScore } from '../../hooks/useScore'
import { FormFlag } from '../FormFlag'
import { Score } from '../Score'
import { motion, AnimatePresence } from 'framer-motion'

export const GameCurrentPage = (): JSX.Element => {
  const { actualCountryQuest, loading, infoActualQuestion, resetAnswers } = useFlags()
  const { activateScore } = useScore()
  const { actualQuestIndex, shuffledCountries } = infoActualQuestion()

  useEffect(() => {
    resetAnswers()
  }, [])

  useEffect(() => {
    if (!loading) activateScore()
  }, [loading])

  return loading
    ? <h2>Loading</h2>
    : <AnimatePresence>
      <section className='game'>
        <h2>¿A que país pertenece esta bandera?</h2>
        {actualQuestIndex} / {shuffledCountries}
        <Score>
          <motion.div
            className='game__flags'
            animate={{
              y: 0,
              opacity: 1
            }}
            initial={{
              y: -20,
              opacity: 0
            }}
            exit={{
              y: 100,
              opacity: 0
            }}
            transition={{ duration: 1.2 }}
            key={actualCountryQuest.translations.spa.common}
          >
            <img className="game__image" src={actualCountryQuest.flags.png} alt={actualCountryQuest.flags.alt} />
          </motion.div>
        </Score>
        <FormFlag />
      </section>
    </AnimatePresence>
}
