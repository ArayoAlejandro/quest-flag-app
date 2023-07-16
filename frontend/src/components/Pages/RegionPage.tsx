
import { useStartGame } from '../../hooks/useStartGame'
import { Region } from '../../services/score'

export const RegionPage = (): JSX.Element => {
  const { handleStart } = useStartGame()
  return (
    <section className='game__options'>
      <h2>Escoge una región</h2>
      <div className='game__options__regions'>
        <button className='game__options__regions__button' onClick={() => { handleStart({ region: Region.europe }) }}>
          <span className='game__options__regions__span'>🌍</span>
          <p className='game__options__regions__paragraph'>EUROPE</p>
        </button>
        <button className='game__options__regions__button' onClick={() => { handleStart({ region: Region.africa }) }}>
          <span className='game__options__regions__span'>🌍</span>
          <p className='game__options__regions__paragraph'>AFRICA</p>
        </button>
        <button className='game__options__regions__button' onClick={() => { handleStart({ region: Region.asia }) }}>
          <span className='game__options__regions__span'>🌏</span>
          <p className='game__options__regions__paragraph'>ASIAN</p>
        </button>
        <button className='game__options__regions__button' onClick={() => { handleStart({ region: Region.oceania }) }}>
          <span className='game__options__regions__span'>🌏</span>
          <p className='game__options__regions__paragraph'>OCEANIA</p>
        </button>
        <button className='game__options__regions__button' onClick={() => { handleStart({ region: Region.america }) }}>
          <span className='game__options__regions__span'>🌎</span>
          <p className='game__options__regions__paragraph'>AMERICA</p>
        </button>
      </div>
    </section>
  )
}
