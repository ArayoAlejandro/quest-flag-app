import { useContext } from 'react'

import { ScoreContext, type ScoreContextType } from '../context/Score'

export const useScore = (): ScoreContextType => {
  const context = useContext(ScoreContext)

  if (context === undefined) {
    throw new Error('useScore must be used within a ScoreProvider')
  }

  return context
}
