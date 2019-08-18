import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostList = props => {
  const { simple, postEdges } = props
  const postList = postEdges
    .filter(postEdge => postEdge.node.frontmatter.template === "post")
    .map(postEdge => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        subtitle: postEdge.node.frontmatter.subtitle,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories,
      }
    })

  return (
    <div className={`${simple ? "simple" : ""} postlist`}>
      {postList.map(post => {
        const thumbnail = post.thumbnail
          ? post.thumbnail.childImageSharp.fixed
          : false
        return (
          <Link to={post.path} key={post.title}>
            <div className="postlist-item">
              {thumbnail ? (
                <Img fixed={post.thumbnail.childImageSharp.fixed} />
              ) : (
                <div />
              )}
              <div>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                {!simple ? <div className="excerpt">{post.date}</div> : null}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

PostList.propTypes = {
  simple: PropTypes.bool,
  postEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
}
PostList.defaultProps = {
  simple: false,
}

export default PostList
