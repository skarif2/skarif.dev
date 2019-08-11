import React from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { Link, graphql } from 'gatsby';

import Layout from '../layout'
import PostList from '../components/PostList'
import PorjectList from '../components/ProjectList'
import QuoteList from '../components/QuoteList'
import config from '../../data/SiteConfig'
import projects from '../../data/ProjectData'
import quotes from '../../data/QuoteData'


export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
  }
`

const HomePage = props => {
  const { data } = props
  const latestPostEdges = data.latest.edges
  const popularPostEdges = data.popular.edges

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} - Software Developer`} />
      <header className="container">
        <div className="lead">
          <div className="header-home">
            <Link to='/about' className="link">
              <img alt={config.siteTitle} src='../../images/profile.jpeg' className="selfie"/>
            </Link>

            <h1 className="title">{config.siteTitle}</h1>
            <h2 className="description">Software Engineer at Invariant Telecom <br /> working on <span>Payment System</span></h2>

            <div className="social-buttons">
              <div>
                <a
                  href="https://www.fb.com/skarif2"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @skarif2
                </a>
              </div>
              <div>
                <GitHubButton
                  href="https://github.com/skarif2"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @taniarascia on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>
        <br />
      </header>

      <div>
        <section className="container">
          <h2>Latest Blogs</h2>
          <PostList simple postEdges={latestPostEdges} />
        </section>

        <section className="container">
          <h2>Latest Blogs</h2>
          <PostList simple postEdges={popularPostEdges} />
        </section>

        <section className="container">
          <h2>Open Source</h2>
          <PorjectList projects={projects} />
        </section>

        <section className="container">
          <h2>{`Other People's Opinions`}</h2>
          <QuoteList quotes={quotes} />
        </section>
      </div>
    </Layout>
  )
}

export default HomePage
