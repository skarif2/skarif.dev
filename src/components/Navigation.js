import React from 'react'
import { Link } from 'gatsby'

import config from '../../data/SiteConfig'

const Navigation = () => {
  return (
    <div>
      <img alt={config.siteTitle} src='../../favicon.ico' />
      <h2>Sk Arif</h2>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>
    </div>
  )
}

export default Navigation