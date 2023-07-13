
import { useGameState } from '../../hooks/useGameState'
import { useMenuScore } from '../../hooks/useMenuScore'
import { Region } from '../../services/score'
import { type RegionType } from '../../types/RegionsType'

export const ScorePage = (): JSX.Element => {
  const { changeScoreMenu, scoreList } = useMenuScore()
  const { resetGame } = useGameState()
  return (
    <>
      <h2>Score</h2>
      <ul>
        {
          Object.keys(Region).map((region, key) => {
            const regionParse = region as RegionType
            return (
              <li key={key}>
                <a onClick={() => { changeScoreMenu(regionParse) }}>
                  {region}
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul>
        {
          scoreList.map((score, key) =>
            <li key={key}>
              {score.score} {score.name}
            </li>
          )
        }
      </ul>
      <button onClick={resetGame}>Volver a jugar</button>
    </>
  )
}
