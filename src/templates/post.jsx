import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../layout"

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
        readingTime {
          text
        }
      }
    }
  }
`

const PostTemplate = props => {
  const { data } = props
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <article className="container">
        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
}

export default PostTemplate
