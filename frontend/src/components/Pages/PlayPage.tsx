import { Link } from 'react-router-dom'
import { useFlags } from '../../hooks/useFlags'
import { useEffect } from 'react'
import { Region } from '../../services/score'

export const PlayPage = (): JSX.Element => {
  const { setRegionGame } = useFlags()

  useEffect(() => {
    setRegionGame(Region.all)
  }, [])
  return (
    <section className='select__game'>
      <h2>Adivina cual es la bandera del país correspondiente</h2>

      <div className='select__game__options'>
        <Link to="/game" className='select__game__button' >
          <span className='select__game__button__emoji'>🌍</span>
          <div>
            <span className='select__game__button__title'>Jugar</span>
            <p className='select__game__button__description'>Países del todo mundo</p>
          </div>
        </Link>
        <Link to="/regions" className='select__game__button'>
          <span className='select__game__button__emoji'>🗼</span>
          <div>
            <span className='select__game__button__title'>Regiones</span>
            <p className='select__game__button__description'>Países de una región elegida</p>
          </div>
        </Link>
        <button className='select__game__button'>
          <span className='select__game__button__emoji'>❓</span>
          <div>
            <span className='select__game__button__title'>Como jugar</span>
            <p className='select__game__button__description'>Aprende a jugar</p>
          </div>
        </button>
        <Link to="/scoreboard" className='select__game__button'>
          <span className='select__game__button__emoji'>🏆</span>
          <div>
            <span className='select__game__button__title'>Scoreboard</span>
            <p className='select__game__button__description'>Mira en que posición estás</p>
          </div>
        </Link>
      </div>
    </section>
  )
}
