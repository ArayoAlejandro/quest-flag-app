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
  resetFlags: () => void
  setCountries: (countries: CountryType[]) => void
  loading: boolean
  isLastQuest: boolean
  regionGame: RegionType
  setRegionGame: (region: RegionType) => void
  infoActualQuestion: () => {
    shuffledCountries: number
    actualQuestIndex: number
  }
  resetAnswers: () => void
}

export const FlagsQuestContext = createContext<FlagsQuestContextType | null>(null)

export const FlagsQuestProvider = ({ children, maxQuest = 30 }: { children: JSX.Element, maxQuest?: number }): JSX.Element => {
  const maxQuestions = maxQuest
  const [countries, setCountries] = useState<CountryType[]>([])
  const [answers, setAnswers] = useState<AnswerType[]>([])
  const [shuffledCountries, setShuffledCountries] = useState<CountryType[]>([])
  const [actualQuestIndex, setActualQuestIndex] = useState<number>(0)
  const [actualCountryQuest, setActualCountryQuest] = useState(shuffledCountries[actualQuestIndex])
  const [loading, setLoading] = useState<boolean>(true)
  const [regionGame, setRegionGame] = useState<RegionType>(Region.all)

  useEffect(() => {
    suffledCountries()
  }, [countries])

  useEffect(() => {
    setActualCountryQuest(shuffledCountries[actualQuestIndex])
  }, [actualQuestIndex, shuffledCountries])

  useEffect(() => {
    if (actualCountryQuest !== undefined) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [actualCountryQuest])

  const isLastQuest = actualQuestIndex === maxQuestions - 1

  const suffledCountries = () => {
    setShuffledCountries([...countries].sort(() => 0.5 - Math.random()).slice(0, maxQuestions))
  }

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
  }

  const resetFlags = (): void => {
    setActualQuestIndex(0)
    suffledCountries()
  }

  const infoActualQuestion = () => {
    return {
      shuffledCountries: shuffledCountries.length,
      actualQuestIndex: actualQuestIndex + 1
    }
  }

  return (
    <FlagsQuestContext.Provider value={{
      answers,
      countries,
      actualCountryQuest,
      addAnswerNameFlag,
      resetFlags,
      setCountries,
      loading,
      isLastQuest,
      regionGame,
      setRegionGame,
      infoActualQuestion,
      resetAnswers
    }}>
      {children}
    </FlagsQuestContext.Provider>
  )
}
