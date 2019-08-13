import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"

import ThemeContext from "../context/ThemeContext"
import config from "../../data/SiteConfig"

const Navigation = props => {
  const [scrolled, setScrolled] = useState(false)
  const { menuLinks } = { ...props }
  const { dark, toggleDark } = useContext(ThemeContext)

  const onScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <nav className={scrolled ? "navbar scroll" : "navbar"}>
      <div className="navbar-container">
        <div className="brand">
          <Link to="/">
            <img
              alt={config.siteTitle}
              className="icon"
              src="../../favicon.png"
            />
            <h2 className="title">Sk Arif</h2>
          </Link>
        </div>
        <div>
          {menuLinks.map(link => (
            <Link key={link.name} to={link.link} activeClassName="active">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="toggleTheme">
          <input
            defaultChecked={dark}
            type="checkbox"
            id="dn"
            onClick={toggleDark}
          />
          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1" />
              <span className="crater crater--2" />
              <span className="crater crater--3" />
            </span>
            <span className="star star--1" />
            <span className="star star--2" />
            <span className="star star--3" />
            <span className="star star--4" />
            <span className="star star--5" />
            <span className="star star--6" />
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
