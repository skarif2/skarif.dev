import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import config from "../../data/SiteConfig"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <div className="container">
        <h1>Get to know me!</h1>
        <p>Let me tell you something about me</p>
      </div>
    </Layout>
  )
}

export default AboutPage
