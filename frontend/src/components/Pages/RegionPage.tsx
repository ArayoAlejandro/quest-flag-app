
import { useStartGame } from '../../hooks/useStartGame'
import { Region } from '../../services/score'

export const RegionPage = (): JSX.Element => {
  const { handleStart } = useStartGame()
  return (

  <>
    <h2>GAME MODES</h2>
    <button onClick={() => { handleStart({ region: Region.all }) }}>TODOS LOS PAISES</button>
    <button onClick={() => { handleStart({ region: Region.africa }) }}>AFRICA</button>
    <button onClick={() => { handleStart({ region: Region.america }) }}>AMERICA</button>
    <button onClick={() => { handleStart({ region: Region.asia }) }}>ASIAN</button>
    <button onClick={() => { handleStart({ region: Region.europe }) }}>EUROPE</button>
    <button onClick={() => { handleStart({ region: Region.oceania }) }}>OCEANIA</button>
  </>
  )
}
