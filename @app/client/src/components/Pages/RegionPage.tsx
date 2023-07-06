
import { GAME_STATES } from '../../context/GameState'
import { useFlags } from '../../hooks/useFlags'

import { useGameState } from '../../hooks/useGameState'
import { useScore } from '../../hooks/useScore'
import { REGIONS, fetchAllCountry, fetchRegionCountry } from '../../services/country'
import { type CountryType } from '../../types/CountryType'

export const RegionPage = (): JSX.Element => {
  const { setActiveScore } = useScore()
  const { setCountries } = useFlags()
  const { setStateGame } = useGameState()

  const handleClick = ({ apiFetch }: { apiFetch: Promise<CountryType[]> }): void => {
    void apiFetch.then(res => {
      setCountries(res)
      setStateGame(GAME_STATES.GAME_CURRENT)
      setActiveScore(true)
    })
  }

  return (
    <>
      <h2>GAME MODES</h2>
      <button onClick={() => { handleClick({ apiFetch: fetchAllCountry() }) }}>TODOS LOS PAISES</button>
      <button onClick={() => { handleClick({ apiFetch: fetchRegionCountry(REGIONS.africa) }) }}>AFRICA</button>
      <button onClick={() => { handleClick({ apiFetch: fetchRegionCountry(REGIONS.america) }) }}>AMERICA</button>
      <button onClick={() => { handleClick({ apiFetch: fetchRegionCountry(REGIONS.asia) }) }}>ASIAN</button>
      <button onClick={() => { handleClick({ apiFetch: fetchRegionCountry(REGIONS.europe) }) }}>EUROPE</button>
      <button onClick={() => { handleClick({ apiFetch: fetchRegionCountry(REGIONS.oceania) }) }}>OCEANIA</button>
    </>
  )
}
