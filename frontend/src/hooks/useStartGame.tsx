import { GAME_STATES } from '../context/GameState'
import { getAllCountry, getRegionCountry } from '../services/country'
import { type RegionType } from '../types/RegionsType'
import { Region } from '../services/score'
import { useFlags } from './useFlags'
import { useGameState } from './useGameState'
import { useScore } from './useScore'

export const useStartGame = () => {
  const { activateScore } = useScore()
  const { setCountries, setRegionGame } = useFlags()
  const { changeStateGame } = useGameState()

  const handleStart = ({ region }: { region: RegionType }): void => {
    let apiFetch
    setRegionGame(region)

    if (region === Region.all) {
      apiFetch = getAllCountry()
    } else {
      apiFetch = getRegionCountry(region)
    }

    void apiFetch.then(res => {
      setCountries(res)
      changeStateGame(GAME_STATES.GAME_CURRENT)
      activateScore()
    })
  }

  return { handleStart }
}