import headerContext from '../context/headerContext'
import { useContext } from 'react'

const ToggleNavigationColorButton = () => {
  const { color, setToggleColor } = useContext(headerContext)

  return (
    <button onClick={() => setToggleColor(!color)}>
      Toggle Navigation Color
    </button>
  )
}

export default ToggleNavigationColorButton