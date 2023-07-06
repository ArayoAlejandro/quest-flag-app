import { createContext, useEffect, useState } from 'react'

export interface ScoreContextType {
  setActiveScore: (stateScore: boolean) => void
  addScorePoints: (scorePoints?: number) => void
  score: number
}

export const ScoreContext = createContext<ScoreContextType>([])

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

  useEffect(() => {
    const clearTimer = timerFunction({ isActive: activeScore })
    return () => { clearTimer() }
  }, [score, activeScore])

  type Prop = () => void
  const timerFunction = ({ isActive }: { isActive: boolean }): Prop => {
    if (!isActive) return () => { }

    const timer = setTimeout(() => {
      if (score !== 0) setScore(prev => prev - lessScoreSecond)
    }, 3000)
    return () => { clearTimeout(timer) }
  }

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
