import { useState } from 'react'
import { GAME_STATES } from '../context/GameState'
import { getAllCountry, getRegionCountry } from '../services/country'

import { Region } from '../services/score'
import { useFlags } from './useFlags'
import { useGameState } from './useGameState'
export const useStartGame = () => {
  const [loading, setLoading] = useState(false)
  const { setCountries, regionGame, resetFlags, setError } = useFlags()
  const { changeStateGame } = useGameState()

  const handleStart = (): void => {
    let apiFetch
    setError(false)
    
    if (regionGame !== Region.all) {
      apiFetch = getRegionCountry(regionGame)
        .catch(() => {
          setError(true)
          return []
        })
    } else {
      apiFetch = getAllCountry()
        .catch(() => {
          setError(true)
          return []
        })
    }

    changeStateGame(GAME_STATES.GAME_DEFAULT)
    setLoading(true)
    void apiFetch.then(res => {
      resetFlags()
      setCountries(res)
      setLoading(false)
    })
  }

  return { handleStart, loading }
}
