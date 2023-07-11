import { useFlags } from '../../hooks/useFlags'
import { useScore } from '../../hooks/useScore'
import { FormFlag } from '../FormFlag'

export const GamePage = (): JSX.Element => {
  const { actualCountryQuest, loading } = useFlags()
  const { score } = useScore()

  return loading
    ? <h2>Loading</h2>
    : <div className='game'>

        <h2>¿A que país pertenece esta bandera?</h2>
        <span>{score}</span>
        <img className="game__image" src={actualCountryQuest.flags.png} alt="A flag" />
        <p>{actualCountryQuest.translations.spa.common}</p>
        <FormFlag />
      </div>
}
