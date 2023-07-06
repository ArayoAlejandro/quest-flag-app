import { useContext } from 'react'
import { FlagsQuestContext, type FlagsQuestContextType } from '../context/FlagsQuest'

export const useFlags = (): FlagsQuestContextType => {
  const context = useContext(FlagsQuestContext)

  if (context === undefined) {
    throw new Error('useFlags must be used within a FlagProvider')
  }

  return context
}
