
import { useFlags } from '../../hooks/useFlags'
import { Region } from '../../services/score'
import { Link } from 'react-router-dom'

export const RegionPage = (): JSX.Element => {
  const { setRegionGame } = useFlags()
  return (
    <section className='game__options'>
      <h2>Escoge una región</h2>
      <div className='game__options__regions'>
        <Link to="/game" className='game__options__regions__button' onClick={() => { setRegionGame(Region.europe) }}>
          <span className='game__options__regions__span'>🌍</span>
          <p className='game__options__regions__paragraph'>EUROPE</p>
        </Link>
        <Link to="/game" className='game__options__regions__button' onClick={() => { setRegionGame(Region.africa) }}>
          <span className='game__options__regions__span'>🌍</span>
          <p className='game__options__regions__paragraph'>AFRICA</p>
        </Link>
        <Link to="/game" className='game__options__regions__button' onClick={() => { setRegionGame(Region.asia) }}>
          <span className='game__options__regions__span'>🌏</span>
          <p className='game__options__regions__paragraph'>ASIAN</p>
        </Link>
        <Link to="/game" className='game__options__regions__button' onClick={() => { setRegionGame(Region.oceania) }}>
          <span className='game__options__regions__span'>🌏</span>
          <p className='game__options__regions__paragraph'>OCEANIA</p>
        </Link>
        <Link to="/game" className='game__options__regions__button' onClick={() => { setRegionGame(Region.america) }}>
          <span className='game__options__regions__span'>🌎</span>
          <p className='game__options__regions__paragraph'>AMERICA</p>
        </Link>
      </div>
    </section>
  )
}
