import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../layout'
import config from '../../data/SiteConfig'

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
      <div>
        <h1>Tags</h1>
        {group.map(tag => (
          <Link key={tag.fieldValue} to={`/tags/${tag.fieldValue}`}>
            <span key={tag.fieldValue}>
              {tag.fieldValue} <strong>{tag.totalCount}</strong>
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default TagsPage