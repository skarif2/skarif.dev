import React, { useContext } from 'react'
import { Link } from 'gatsby'

import ThemeContext from '../context/ThemeContext'
import config from '../../data/SiteConfig'
// import navbarStyles from '../styles/modules/navbar.module.scss'

const Navigation = (props) => {
  const { menuLinks } = { ...props }
  const { dark, toggleDark } = useContext(ThemeContext)
  return (
    <nav>
      <div>
        <div>
          <Link to='/'>
            <img alt={config.siteTitle} src='../../favicon.ico' />
            <h2>Sk Arif</h2>
          </Link>
        </div>
        <div>
          {menuLinks.map(link => (
            <Link key={link.name} to={link.link} activeClassName="active">
              {link.name}
            </Link>
          ))}
        </div>
        <button
          type='button'
          className="dark-switcher"
          onClick={toggleDark}
        >
          {dark ? <span>☀</span> : <span>☾</span>}
        </button>
      </div>
    </nav>
  )
}

export default Navigation