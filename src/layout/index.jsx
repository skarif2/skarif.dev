import React, { useContext } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import ThemeContext from "../context/ThemeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import config from "../../data/SiteConfig"
import "../styles/main.scss"

const Layout = props => {
  const { children } = props
  const { dark } = useContext(ThemeContext)
  return (
    <div>
      <Helmet
        bodyAttributes={{
          class: `${dark ? "dark" : "light"}`,
        }}
      >
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Navbar navItems={config.navItems} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Layout
