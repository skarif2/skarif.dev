import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import '../styles/main.scss'

const Layout = props => {
  return (
    <div>
      <Navigation menuLinks={config.menuLinks}/>
      <main id='main-content'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout