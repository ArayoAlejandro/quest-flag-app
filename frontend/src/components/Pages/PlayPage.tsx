import { GAME_STATES } from '../../context/GameState'
import { useChangeState } from '../../hooks/useChangeState'
import { useStartGame } from '../../hooks/useStartGame'
import { Region } from '../../services/score'

export const PlayPage = (): JSX.Element => {
  const { changeGameStateReset } = useChangeState()
  const { handleStart } = useStartGame()
  return (
    <section className='select__game'>
      <h2>Adivina cúal es la bandera del país correspondiente</h2>

      <div className='select__game__options'>
        <button className='select__game__button' onClick={() => { handleStart({ region: Region.all }) }}>
          <span className='select__game__button__emoji'>🌍</span>
          <div>
            <span className='select__game__button__title'>Jugar</span>
            <p className='select__game__button__description'>Paises del todo mundo</p>
          </div>
        </button>
        <button className='select__game__button' onClick={() => { changeGameStateReset(GAME_STATES.GAME_SELECT_REGION) }}>
          <span className='select__game__button__emoji'>🗼</span>
          <div>
            <span className='select__game__button__title'>Regiones</span>
            <p className='select__game__button__description'>Paises de una región elegida</p>
          </div>
        </button>
        <button className='select__game__button'>
          <span className='select__game__button__emoji'>❓</span>
          <div>
            <span className='select__game__button__title'>Como jugar</span>
            <p className='select__game__button__description'>Aprende a jugar</p>
          </div>
        </button>
      </div>
    </section>
  )
}
