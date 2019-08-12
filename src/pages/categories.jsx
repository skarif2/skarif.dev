import _ from "lodash"
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../layout"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query CategoriesQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

const CategoriesPage = props => {
  const { data } = props
  const { group } = data.allMarkdownRemark
  return (
    <Layout>
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <div>
        <h1>Tags</h1>
        {group.map(category => (
          <Link
            to={`/categories/${_.kebabCase(category.fieldValue)}`}
            key={category.fieldValue}
          >
            <span key={category.fieldValue}>
              {category.fieldValue}
              <strong className="count">{category.totalCount}</strong>
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }).isRequired,
}

export default CategoriesPage
