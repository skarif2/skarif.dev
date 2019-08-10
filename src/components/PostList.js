import React from 'react'
import { Link } from 'gatsby'

const PostList = props => {
  const { simple, postEdges } = props
  const postList = postEdges
    .filter(postEdge => postEdge.node.frontmatter.template === 'post')
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

export default PostList