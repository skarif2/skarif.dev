import moment from "moment"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layout"
import Newsletter from "../components/Newsletter"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        subtitle
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
  const githubLink = `https://github.com/skarif2/sight-gatsby/tree/master/content/posts/${moment(
    post.frontmatter.date
  ).format("YYYY-MM-DD")}/${post.frontmatter.slug}.md`

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${config.siteTitle}`}</title>
      </Helmet>
      <div className="container">
        <article>
          <header className={`post-header ${!thumbnail ? "no-thumbnail" : ""}`}>
            {thumbnail ? <Img className="thumbnail" fixed={thumbnail} /> : null}
            <div className="titles">
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.subtitle}</p>
              <div className="date">
                <time>{date}</time>
                {" • "}
                <span>{post.fields.readingTime.text}</span>
                {" • "}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  Edit{" "}
                  <span role="img" aria-label="Edit">
                    🖋️
                  </span>
                </a>
              </div>
            </div>
          </header>

          {/* <div className="tag-list">
            {post.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
                <span>{tag}</span>
              </Link>
            ))}
          </div> */}
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <div className="post-newsletter">
          <Newsletter />
        </div>
      </div>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
}

export default PostTemplate
