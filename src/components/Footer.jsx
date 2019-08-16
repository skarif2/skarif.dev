import React from "react"
import { Link } from "gatsby"

import config from "../../data/SiteConfig"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer container">
      <hr className="hr-text" data-content="⋯" />
      <div className="links">
        <Link to="/categories">Categories</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/resume">Résumé</Link>
        <Link to="/learn">Learn</Link>
        <a
          href="https://github.com/skarif2/sight-gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
      <p className="copyright">&copy; {`${year}, ${config.siteTitle}`}</p>
    </footer>
  )
}

export default Footer
