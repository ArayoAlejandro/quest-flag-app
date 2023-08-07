
import { useEffect } from 'react'
import { useGameState } from '../../hooks/useGameState'
import { GAME_STATES } from '../../context/GameState'

export const GamePage = (): JSX.Element => {
  const { actualPage, changeStateGame } = useGameState()

  useEffect(() => {
    return () => { changeStateGame(GAME_STATES.GAME_DEFAULT) }
  }, [])

  return actualPage
}
