
import { type Regions, type RegionType } from '../types/RegionsType'
import { type Score } from '../types/ScoreType'

export const postScores = ({ scoreData, urlApiScore }: { scoreData: Score, urlApiScore: RegionType }) => {
  return fetch(`/api/score/${urlApiScore}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(scoreData)
  })
}

export const getScores = (urlApiScore: RegionType) => {
  return fetch(`/api/score/${urlApiScore}`)
    .then(data => data.json())
}

export const Region: Regions = {
  all: 'all',
  africa: 'africa',
  america: 'america',
  asia: 'asia',
  europe: 'europe',
  oceania: 'oceania'

}
