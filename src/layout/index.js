import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig'
import '../styles/main.scss'

const Layout = props => {
  return (
    <div>
      <Navbar menuLinks={config.menuLinks}/>
      <main id='main-content'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout