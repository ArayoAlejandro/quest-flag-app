import { useStartGame } from '../../hooks/useStartGame'
import { Region } from '../../services/score'
import { Link } from 'react-router-dom'

export const PlayPage = (): JSX.Element => {
  const { handleStart } = useStartGame()

  return (
    <section className='select__game'>
      <h2>Adivina cúal es la bandera del país correspondiente</h2>

      <div className='select__game__options'>
        <Link to="/game" className='select__game__button' onClick={() => { handleStart({ region: Region.all }) }}>
          <span className='select__game__button__emoji'>🌍</span>
          <div>
            <span className='select__game__button__title'>Jugar</span>
            <p className='select__game__button__description'>Paises del todo mundo</p>
          </div>
        </Link>
        <Link to="/regions" className='select__game__button'>
          <span className='select__game__button__emoji'>🗼</span>
          <div>
            <span className='select__game__button__title'>Regiones</span>
            <p className='select__game__button__description'>Paises de una región elegida</p>
          </div>
        </Link>
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
