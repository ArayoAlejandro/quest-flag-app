import { createContext, useCallback, useEffect, useState } from 'react'

export interface ScoreContextType {
  activateScore: () => void
  deactivateScore: () => void
  addScorePoints: (scorePoints?: number) => void
  score: number
}

export const ScoreContext = createContext<ScoreContextType | null>(null)

interface Props {
  children: JSX.Element
  initScore?: number
  correctAnswerScoreDefault?: number
  lessScoreSecond?: number
}

export const ScoreProvider = ({
  children,
  initScore = 1000,
  correctAnswerScoreDefault = 1000,
  lessScoreSecond = 50
}: Props): JSX.Element => {
  const [score, setScore] = useState<number>(initScore)
  const [activeScore, setActiveScore] = useState<boolean>(false)

  type timerFunctionProp = () => void
  const timerFunction = ({ isActive }: { isActive: boolean }): timerFunctionProp => {
    if (!isActive) return () => '_'

    const timer = setTimeout(() => {
      if (score !== 0) setScore(prev => prev - lessScoreSecond)
    }, 3000)
    return () => { clearTimeout(timer) }
  }

  const timerCallback = useCallback(timerFunction, [score, lessScoreSecond])

  useEffect(() => {
    const clearTimer = timerCallback({ isActive: activeScore })
    return () => { clearTimer() }
  }, [score, activeScore, timerCallback])

  const addScorePoints = (scorePoints: number = correctAnswerScoreDefault): void => {
    setScore(prev => prev + scorePoints)
  }

  const deactivateScore = () => {
    setActiveScore(false)
  }

  const activateScore = () => {
    setActiveScore(true)
  }

  return (
    <ScoreContext.Provider value={
      {
        addScorePoints,
        deactivateScore,
        activateScore,
        score
      }}>
      {children}
    </ScoreContext.Provider>
  )
}
