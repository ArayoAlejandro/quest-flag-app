import { useFlags } from '../../hooks/useFlags'
import { FormFlag } from '../FormFlag'
import { Score } from '../Score'

export const GamePage = (): JSX.Element => {
  const { actualCountryQuest, loading } = useFlags()

  return loading
    ? <h2>Loading</h2>
    : <section className='game'>
      <h2>¿A que país pertenece esta bandera?</h2>
      <Score>
        <>
          <img className="game__image" src={actualCountryQuest.flags.png} alt="A flag" />
          {
           actualCountryQuest.translations.spa.common
          }
          <FormFlag />
        </>
      </Score>
    </section>
}
