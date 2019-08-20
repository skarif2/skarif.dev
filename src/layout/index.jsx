import React, { useContext } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { config } from "@fortawesome/fontawesome-svg-core"

import ThemeContext from "../context/ThemeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import siteConfig from "../../data/SiteConfig"
import "../styles/main.scss"

config.autoAddCss = false

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
        <meta name="description" content={siteConfig.siteDescription} />
      </Helmet>
      <Navbar navItems={siteConfig.navItems} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Layout
