import React from "react"
import Helmet from "react-helmet"

import Layout from "../layout"
import config from "../../data/SiteConfig"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <div className="container">
        <h1>My Contact</h1>
      </div>
    </Layout>
  )
}

export default ContactPage
