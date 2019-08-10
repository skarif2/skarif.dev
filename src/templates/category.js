import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import PostList from '../components/PostList'
import config from '../../data/SiteConfig'

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
  }
`

const CategoryTemplate = props => {
  const { category } = props.pageContext
  const postEdges = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Helmet title={`Posts in category "${category}" – ${config.siteTitle}`} />
      <div className="container">
        <h1>{category}</h1>
        <PostList postEdges={postEdges} />
      </div>
    </Layout>
  )
}

export default CategoryTemplate