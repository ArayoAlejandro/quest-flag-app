import { useEffect, useState } from 'react'
import { type Score } from '../types/ScoreType'
import { useFlags } from './useFlags'
import { type RegionType } from '../types/RegionsType'
import { getScores } from '../services/score'

export const useMenuScore = () => {
  const { regionGame } = useFlags()
  const [scoreList, setScoreList] = useState<Score[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const setScoreRegion = (region: RegionType) => {
    setLoading(false)
    getScores(region)
      .then(data => {
        setScoreList(data)
        setLoading(true)
        setError(false)
      })
      .catch(() => setError(true))
  }

    
  useEffect(() => {
    setScoreRegion(regionGame)
  }, [])

  const changeScoreMenu = (region: RegionType): void => {
    setScoreRegion(region)
  }

  return {
    loading,
    changeScoreMenu,
    scoreList,
    error
  }
}
