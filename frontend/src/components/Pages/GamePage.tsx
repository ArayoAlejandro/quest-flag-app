import { useEffect } from 'react'
import { useGameState } from '../../hooks/useGameState'
import { useFlags } from '../../hooks/useFlags'

export const GamePage = (): JSX.Element => {
  const { actualPage } = useGameState()
  const { resetAnswers } = useFlags()

  useEffect(() => {
    resetAnswers()
  }, [])
  return actualPage
}
