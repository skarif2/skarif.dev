import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../layout"
import PostList from "../components/PostList"
import config from "../../data/SiteConfig"

export const pageQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
            readingTime {
              text
            }
          }
          excerpt(pruneLength: 180)
          frontmatter {
            title
            subtitle
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

const BlogPage = props => {
  const { data } = props
  const [searchKey, setSearchKey] = useState("")
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState(data.posts.edges)

  useEffect(() => {
    let filteredPosts = data.posts.edges.filter(post => {
      return post.node.frontmatter.title
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    })
    if (categories.length > 0) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.node.frontmatter.categories &&
          categories.every(cat =>
            post.node.frontmatter.categories.includes(cat)
          )
      )
    }
    setPosts(filteredPosts)
  }, [searchKey, categories])

  const handleChange = async event => {
    const { value } = event.target
    await setSearchKey(value)
  }

  const updateCategories = category => {
    if (!categories.includes(category)) {
      setCategories([...categories, category])
    } else {
      setCategories(categories.filter(cat => category !== cat))
    }
  }

  const allCategories = data.categories.group
  const totalCount = data.posts.edges.length
  const filterCount = posts.length

  return (
    <Layout>
      <Helmet title={`Blogs | ${config.siteTitle}`} />
      <div className="container">
        <h1>Blogs</h1>
        <div className="category-count">
          <div className="category">
            {allCategories.map(category => {
              const active = categories.includes(category.fieldValue)

              return (
                <button
                  className={`category-filter ${
                    active ? "active" : "inactive"
                  }`}
                  key={category.fieldValue}
                  type="button"
                  onClick={async () => {
                    updateCategories(category.fieldValue)
                  }}
                >
                  {category.fieldValue}
                </button>
              )
            })}
          </div>
          <div className="post-count">
            {filterCount}/{totalCount}
          </div>
        </div>
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={searchKey}
            placeholder="Type here to filter posts..."
            onChange={handleChange}
          />
        </div>
        <PostList postEdges={posts} />
      </div>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      group: PropTypes.array,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

export default BlogPage
