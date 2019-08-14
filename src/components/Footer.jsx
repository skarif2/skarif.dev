import React from "react"

import config from "../../data/SiteConfig"

const Footer = () => {
  return (
    <footer className="container">
      <hr className="hr-text" data-content="⋯" />
      <p>{config.siteTitle}© 2019</p>
      <p>
        ❤ for <a href="https://www.gatsbyjs.org/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
