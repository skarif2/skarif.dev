import moment from "moment"
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
        date: moment(postEdge.node.fields.date).format("MMM D, YYYY"),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.fields.readingTime.text,
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
                <Img
                  className="post-thumbnail"
                  fixed={post.thumbnail.childImageSharp.fixed}
                />
              ) : (
                <div />
              )}
              <div>
                <h2 className="post-title">{post.title}</h2>
                {!simple ? (
                  <p className="post-subtitle">{post.subtitle}</p>
                ) : null}
                <div className="date">
                  {post.date}
                  {" • "}
                  {post.timeToRead}
                </div>
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
