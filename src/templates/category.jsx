import React from 'react'
import PropTypes from 'prop-types'
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
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`

const CategoryTemplate = props => {
  const { data, pageContext } = props
  const { category } = pageContext
  const postEdges = data.allMarkdownRemark.edges

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

CategoryTemplate.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
}

export default CategoryTemplate