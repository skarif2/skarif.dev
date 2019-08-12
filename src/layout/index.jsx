import React from "react"
import PropTypes from "prop-types"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import config from "../../data/SiteConfig"
import "../styles/main.scss"

const Layout = props => {
  const { children } = props
  return (
    <div>
      <Navbar menuLinks={config.menuLinks} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Layout
