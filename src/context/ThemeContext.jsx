import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

const ThemeContext = createContext({
  dark: false,
  toggleDark: {},
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const ThemeProvider = props => {
  const { children } = props
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    localStorage.setItem("dark", JSON.stringify(!dark))
    setDark(!dark)
  }

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("dark"))
    if (isDark) {
      setDark(isDark)
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
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
}

export default ThemeContext
export { ThemeProvider }
