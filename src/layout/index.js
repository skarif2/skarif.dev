import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = props => {
  return (
    <div>
      <Navigation />
      <main id='main-content'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout