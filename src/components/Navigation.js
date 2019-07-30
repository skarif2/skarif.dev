import React from 'react'
import { Link } from 'gatsby'

import config from '../../data/SiteConfig'

const Navigation = (props) => {
  const { menuLinks } = { ...props }
  return (
    <nav className='nav scroll'>
      <div className='nav-container'>
        <div className="brand">
          <Link to='/'>
            <img alt={config.siteTitle} src='../../favicon.ico' />
            <h2 className="text">Sk Arif</h2>
          </Link>
        </div>
        <div className="links">
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