import { createContext, useCallback, useEffect, useState } from 'react'

export interface ScoreContextType {
  setActiveScore: (stateScore: boolean) => void
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

  type Prop = () => void
  const timerFunction = ({ isActive }: { isActive: boolean }): Prop => {
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

  return (
    <ScoreContext.Provider value={
      {
        addScorePoints,
        setActiveScore,
        score
      }}>
      {children}
    </ScoreContext.Provider>
  )
}
