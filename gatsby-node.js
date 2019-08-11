const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const filePath = path.parse(fileNode.relativePath)
    createNodeField({ node, name: 'slug', value: _getSlug(node, filePath) })
    createNodeField({ node, name: 'date', value: _getDate(node) })
  }
}

const _getSlug = (node, filePath) => {
  let slug
  if (_.hasIn(node, 'frontmatter.slug')) {
    slug = filePath.dir === 'posts' 
      ? `/blog/${_.kebabCase(node.frontmatter.slug)}`
      : `/${_.kebabCase(node.frontmatter.slug)}`
  } else if (_.hasIn(node, 'frontmatter.title')) {
    slug = filePath.dir === 'posts' 
      ? `/blog/${_.kebabCase(node.frontmatter.title)}`
      : `/${_.kebabCase(node.frontmatter.title)}`
  } else if (filePath.dir === 'posts') {
    slug = `/blog/${_.kebabCase(filePath.name)}`
  } else if (filePath.dir === '') {
    slug = `/${_.kebabCase(filePath.name)}`
  } else {
    slug = `/${_.kebabCase(filePath.dir)}`
  }
  return slug
}

const _getDate = (node) => {
  if (_.hasIn(node, 'frontmatter.date')) {
    return new Date(node.frontmatter.date)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const tagTemplate = path.resolve('./src/templates/tag.js')
  const categoryTemplate = path.resolve('./src/templates/category.js')
  let tagSet = new Set()
  let categorySet = new Set()

  try {
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
                categories
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    const { edges } = result.data.allMarkdownRemark
    edges.forEach(edge => {
      const { frontmatter } = edge.node
      if (frontmatter.tags) {
        tagSet = new Set([ ...tagSet, ...frontmatter.tags ])
      }
      if (frontmatter.categories) {
        categorySet = new Set([ ...categorySet, ...frontmatter.categories ])
      }

      if (frontmatter.template === 'post') {
        createPage({
          path: edge.node.fields.slug,
          component: postTemplate,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      }

      if (frontmatter.template === 'page') {
        createPage({
          path: edge.node.fields.slug,
          component: pageTemplate,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      }
    })

    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    const categoryList = Array.from(categorySet)
    categoryList.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

  } catch (e) {
    console.log(e)
    throw e
  }
  



}