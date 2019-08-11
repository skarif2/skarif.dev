import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import PostList from '../components/PostList'
import config from '../../data/SiteConfig'

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 180)
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

const BlogPage = props => {
  const categories = props.data.categories.group
  const posts= props.data.posts.edges
  return (
    <Layout>
      <Helmet title={`Blogs | ${config.siteTitle}`} />
      <div>
        <h1>Blogs</h1>
        <div>
          {categories.map(category => {
            return (
              <div key={category.fieldValue}>
                {category.fieldValue}
              </div>
            )
          })}
        </div>
        <PostList postEdges={posts} />
      </div>
    </Layout>
  )
}

export default BlogPage