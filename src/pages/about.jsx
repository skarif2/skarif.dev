import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import config from "../../data/SiteConfig"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <h1>About Me!</h1>
      <p>Let me tell you something about me</p>
    </Layout>
  )
}

export default AboutPage
