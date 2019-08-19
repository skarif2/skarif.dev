import moment from "moment"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layout"
import config from "../../data/SiteConfig"

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
  const date = moment(post.frontmatter.date).format("MMMM D, YYYY")
  const thumbnail = post.frontmatter.thumbnail
    ? post.frontmatter.thumbnail.childImageSharp.fixed
    : false

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <article className="container">
        <header className={`single-header ${!thumbnail ? "no-thumbnail" : ""}`}>
          {thumbnail ? (
            <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} />
          ) : null}
          <div className="flex">
            <h1>{post.frontmatter.title}</h1>
            <div className="post-meta">
              <time className="date">{date}</time>/
              <a className="twitter-link" href="/">
                Share
              </a>
              /{"2 comments"}
              <a
                className="github-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit on Github{" "}
                <span role="img" aria-label="edit on github">
                  ✏️
                </span>
              </a>
            </div>
            {/* <PostTags tags={post.tags} /> */}
          </div>
        </header>

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
