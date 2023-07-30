import { createContext, useEffect, useState } from 'react'

import { EndPage } from '../components/Pages/EndPage'
import { GameCurrentPage } from '../components/Pages/GameCurrentPage'

export const GAME_STATES = {
  GAME_CURRENT: 'GAME_CURRENT',
  GAME_FINISH: 'GAME_FINISH'
}

const GAME_PAGE: Record<string, JSX.Element> = {
  GAME_CURRENT: <GameCurrentPage />,

  GAME_FINISH: <EndPage />
}

export interface GameState {
  actualPage: JSX.Element
  changeStateGame: (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => void
  resetGame: () => void
  isPlaying: boolean
  setIsPlaying: (state: boolean) => void
}

export const GameStateContext = createContext<GameState | null>(null)

export const GameStateProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [stateGame, setStateGame] = useState(GAME_STATES.GAME_CURRENT)
  const [isPlaying, setIsPlaying] = useState(false)

  const actualPage = GAME_PAGE[stateGame]

  const resetGame = () => {
    setStateGame(GAME_STATES.GAME_CURRENT)
  }

  const changeStateGame = (gameState: typeof GAME_STATES[keyof typeof GAME_STATES]) => {
    setStateGame(gameState)
  }

  return (
    <GameStateContext.Provider value={
      {
        changeStateGame,
        actualPage,
        resetGame,
        isPlaying,
        setIsPlaying
      }
      }>
      {children}
    </GameStateContext.Provider>
  )
}
