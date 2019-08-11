import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import PostList from '../components/PostList'
import config from '../../data/SiteConfig'

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
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

const TagTemplate = props => {
  const { tag } = props.pageContext
  const postEdges = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Helmet title={`Tag: ${tag} | ${config.siteTitle}`} />
      <div>
        <h1>
          Tag: <u>{tag}</u>
        </h1>
        <PostList postEdges={postEdges} />
      </div>
    </Layout>
  )
}

export default TagTemplate