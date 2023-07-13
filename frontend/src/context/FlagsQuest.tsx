import { createContext, useEffect, useState } from 'react'
import { type AnswerType } from '../types/AnswersType'

import { type CountryType } from '../types/CountryType'
import { type RegionType } from '../types/RegionsType'
import { Region } from '../services/score'

export interface FlagsQuestContextType {
  countries: CountryType[]
  actualCountryQuest: CountryType
  answers: AnswerType[]
  addAnswerNameFlag: (flagName: string) => void
  resetAnswers: () => void
  setCountries: (countries: CountryType[]) => void
  loading: boolean
  isLastQuest: boolean
  regionGame: RegionType
  setRegionGame: (region: RegionType) => void

}

export const FlagsQuestContext = createContext<FlagsQuestContextType | null>(null)

export const FlagsQuestProvider = ({ children, maxQuest = 5 }: { children: JSX.Element, maxQuest?: number }): JSX.Element => {
  const maxQuestions = maxQuest
  const [countries, setCountries] = useState<CountryType[]>([])
  const [answers, setAnswers] = useState<AnswerType[]>([])
  const [shuffledCountries, setShuffledCountries] = useState<CountryType[]>([])
  const [actualQuestIndex, setActualQuestIndex] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [regionGame, setRegionGame] = useState<RegionType>(Region.all)

  useEffect(() => {
    setShuffledCountries([...countries].sort(() => 0.5 - Math.random()).slice(0, maxQuestions))
  }, [countries, maxQuestions])
  const actualCountryQuest = shuffledCountries[actualQuestIndex]
  if (actualCountryQuest !== undefined && loading) setLoading(false)

  const isLastQuest = actualQuestIndex === maxQuestions - 1

  const addAnswerNameFlag = (input: string): void => {
    setAnswers(prev => {
      return [...prev,
        {
          answer: input,
          flag: shuffledCountries[actualQuestIndex],
          questIndex: actualQuestIndex,
          isCorrectAnswer: input === shuffledCountries[actualQuestIndex].translations.spa.common
        }
      ]
    })
    setActualQuestIndex(actualQuestIndex + 1)
  }

  const resetAnswers = (): void => {
    setAnswers([])
    setActualQuestIndex(0)
  }

  return (
    <FlagsQuestContext.Provider value={{
      answers,
      countries,
      actualCountryQuest,
      addAnswerNameFlag,
      resetAnswers,
      setCountries,
      loading,
      isLastQuest,
      regionGame,
      setRegionGame
    }}>
      {children}
    </FlagsQuestContext.Provider>
  )
}
