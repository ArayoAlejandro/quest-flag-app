/* eslint-disable @typescript-eslint/require-array-sort-compare */
import { useState } from 'react'
import { FlagsList } from './FlagsList'
import { useFlags } from '../hooks/useFlags'
import { useGameState } from '../hooks/useGameState'
import { GAME_STATES } from '../context/GameState'
import { useScore } from '../hooks/useScore'

export const FormFlag = (): JSX.Element => {
  const { addAnswerNameFlag, countries, isLastQuest, actualCountryQuest } = useFlags()
  const { setStateGame } = useGameState()
  const { addScorePoints } = useScore()
  const [input, setInput] = useState<string>('')

  const handleSubmit = ({ e, input }: { e: React.FormEvent, input: string }): void => {
    e.preventDefault()
    addAnswerNameFlag(input)
    setInput('')
    if (input === actualCountryQuest.translations.spa.common) addScorePoints()
    if (isLastQuest) setStateGame(GAME_STATES.GAME_FINISH)
  }

  const nameFlags: string[] = countries.map(country => country.translations.spa.common).sort()

  return (
    <>
      <form onSubmit={e => { handleSubmit({ e, input }) }} className='game__form'>
        <input
          autoFocus
          className="game__form__input"
          type="text"
          name='flag'
          value={input}
          onChange={e => { setInput(e.target.value) }}
        />
        <div className='game__form__buttons'>
          <button disabled={!nameFlags.includes(input)}>Send</button>
        </div>
      </form>
      <FlagsList filterFlags={nameFlags.filter(flag => flag.includes(input))} setInput={setInput} ></FlagsList>
    </>
  )
}
