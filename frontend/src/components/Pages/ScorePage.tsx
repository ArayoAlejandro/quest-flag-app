import { useEffect, useState } from 'react'
import { GAME_STATES } from '../../context/GameState'
import { useGameState } from '../../hooks/useGameState'
import { type Score } from '../../types/ScoreType'

export const ScorePage = (): JSX.Element => {
  const [scoreAll, setScoreAll] = useState<Score[]>([])
  const { setStateGame } = useGameState()

  const handleClick = (): void => {
    setStateGame(GAME_STATES.GAME_START)
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/score')
      .then(data => data.json())
      .then(data => { setScoreAll(data) })
  }, [])

  return (
    <>
      <h2>Score</h2>
      <ul>
        {
          scoreAll.map((score, key) =>
          <li key={key}>
            {score.name} {score.score}
          </li>)
        }
      </ul>
      <button onClick={handleClick}>Volver a jugar</button>
    </>
  )
}
