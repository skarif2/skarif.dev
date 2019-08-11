import React, { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

const ThemeButton = () => {
  const { dark, toggleDark } = useContext(ThemeContext)

  return (
    <button className="dark-switcher" onClick={toggleDark}>
      {dark ? <span>☀</span> : <span>☾</span>}
    </button>
  )
}

export default ThemeButton