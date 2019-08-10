import React from 'react'
import { Link } from 'gatsby'

import config from '../../data/SiteConfig'
import navbarStyles from '../styles/modules/navbar.module.scss'

const Navigation = (props) => {
  const { menuLinks } = { ...props }
  return (
    <nav>
      <div>
        <div >
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
      </div>
    </nav>
  )
}

export default Navigation