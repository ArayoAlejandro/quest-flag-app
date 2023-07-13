import { useEffect, useState } from 'react'
import { type Score } from '../types/ScoreType'
import { useFlags } from './useFlags'
import { type RegionType } from '../types/RegionsType'
import { getScores } from '../services/score'

export const useMenuScore = () => {
  const { regionGame } = useFlags()
  const [scoreList, setScoreList] = useState<Score[]>([])

  const setScoreRegion = (region: RegionType) => {
    getScores(region)
      .then(data => { setScoreList(data) })
  }

  useEffect(() => {
    setScoreRegion(regionGame)
  }, [])

  const changeScoreMenu = (region: RegionType): void => {
    setScoreRegion(region)
  }

  return {
    changeScoreMenu,
    scoreList: scoreList.sort((a, b) => b.score - a.score)
  }
}
