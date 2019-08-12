import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../layout"
import PostList from "../components/PostList"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
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
  const { data } = props
  const categories = data.categories.group
  const posts = data.posts.edges
  return (
    <Layout>
      <Helmet title={`Blogs | ${config.siteTitle}`} />
      <div>
        <h1>Blogs</h1>
        <div>
          {categories.map(category => {
            return <div key={category.fieldValue}>{category.fieldValue}</div>
          })}
        </div>
        <PostList postEdges={posts} />
      </div>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      group: PropTypes.array,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

export default BlogPage
