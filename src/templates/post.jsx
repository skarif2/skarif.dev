import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../layout"

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
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
      <article>
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
