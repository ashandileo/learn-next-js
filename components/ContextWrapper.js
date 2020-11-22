import { useState } from 'react'
import HeaderContext from '../context/headerContext'

const ContextWrapper = ({ children, navigation }) => {
  const [menuItems, setMenuItems] = useState(navigation)
  const [color, setToggleColor] = useState(true)

  return (
    <HeaderContext.Provider value={{ menuItems, color, setToggleColor }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default ContextWrapper