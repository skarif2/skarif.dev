import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../layout"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        template
      }
      fields {
        slug
        date
      }
    }
  }
`

const PageTemplate = props => {
  const { data, pageContext } = props
  const { slug } = pageContext
  const postNode = data.markdownRemark
  const page = postNode.frontmatter

  if (!page.id) {
    page.id = slug
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${page.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <div>
        <article>
          <header>
            <h1>{page.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </article>
      </div>
    </Layout>
  )
}

PageTemplate.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
}

export default PageTemplate
