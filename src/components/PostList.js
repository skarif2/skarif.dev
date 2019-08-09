import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const PostList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <ul>
        {edges.map(edge => {
          return (
            <li>
              <h4>{edge.node.frontmatter.title}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList