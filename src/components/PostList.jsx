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
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        categories: postEdge.node.frontmatter.categories,
      }
    })

  return (
    <div>
      <ul>
        {postList.map(post => {
          return (
            <Link to={post.path} key={post.title}>
              <div>
                <Img fixed={post.thumbnail.childImageSharp.fixed} />
                <div>
                  <h2>{post.title}</h2>
                  {!simple ? <div className="excerpt">{post.date}</div> : null}
                </div>
              </div>
            </Link>
          )
        })}
      </ul>
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
