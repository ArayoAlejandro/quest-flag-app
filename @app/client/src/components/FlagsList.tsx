
interface Props {
  filterFlags: string[]
  setInput: (flagName: string) => void
}

export const FlagsList = ({ filterFlags, setInput }: Props): JSX.Element => {
  return (
    <ul className={`flaglist ${filterFlags.length > 0 ? '' : ''}`}>
      {
        filterFlags.map((nameFlag, key) =>
          <li
            className='flaglist__item'
            key={key}
            onClick={() => { setInput(nameFlag) }}>
            {nameFlag}
          </li>
        )
      }
    </ul>
  )
}
