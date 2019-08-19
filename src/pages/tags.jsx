import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../layout"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

const TagsPage = props => {
  const { data } = props
  const { group } = data.allMarkdownRemark

  return (
    <Layout>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <div className="container">
        <h1>Tags</h1>
        <div className="tags">
          {group.map(tag => (
            <Link key={tag.fieldValue} to={`/tags/${tag.fieldValue}`}>
              <span key={tag.fieldValue}>
                {tag.fieldValue}
                <strong className="count">{tag.totalCount}</strong>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }).isRequired,
}

export default TagsPage
