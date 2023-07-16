
import { useMenuScore } from '../../hooks/useMenuScore'
import { Region } from '../../services/score'
import { type RegionType } from '../../types/RegionsType'

export const ScorePage = (): JSX.Element => {
  const { changeScoreMenu, scoreList } = useMenuScore()

  const emote = ['🥇', '🥈', '🥉']
  return (
    <section className='score__game'>
      <ul className='score__game__menu__list'>
        {
          Object.keys(Region).map((region, key) => {
            const regionParse = region as RegionType
            return (
              <li className='score__game__menu__item' key={key}>
                <a onClick={() => { changeScoreMenu(regionParse) }}>
                  {region.toUpperCase()}
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className='score__game__list'>
        <li className='score__game__list__header' >
          <p>
            Clasificación
          </p>
        </li>
        {
          scoreList.map((score, index) =>
            <li className='score__game__item' key={score.id}>
              <p>
                {
                  index > 2
                    ? `${index + 1}. `
                    : emote[index]
                }
                {score.name}
              </p>
              <p>
                {score.score} pts
              </p>
            </li>
          )
        }
      </ul>
    </section>
  )
}
