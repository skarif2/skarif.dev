import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layout'
import PostList from '../components/PostList'
import config from '../../data/SiteConfig'

const TagTemplate = props => {
  const { tag } = props.pageContext


  return (
    <Layout>
      <Helmet title={`Tag: ${tag} | ${config.siteTitle}`} />
      <div>
        <h1>
          Tag: <u>{tag}</u>
        </h1>
        <PostList postEdges={postEdges} />
      </div>
    </Layout>
  )
}