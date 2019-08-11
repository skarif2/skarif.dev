import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const ThemeProvider = props => {
  const [ dark, setDark ] = useState(false)

  const toggleDark = () => {
    localStorage.setItem("dark", JSON.stringify(!dark))
    setDark(!dark)
  }

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      setDark(lsDark)
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }