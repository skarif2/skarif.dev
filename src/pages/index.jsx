import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faStackOverflow,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../layout"
import PostList from "../components/PostList"
import PorjectList from "../components/ProjectList"
import QuoteList from "../components/QuoteList"
import config from "../../data/SiteConfig"
import projects from "../../data/ProjectData"
import quotes from "../../data/QuoteData"

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
  }
`

const HomePage = props => {
  const { data } = props
  const latestPostEdges = data.latest.edges
  const popularPostEdges = data.popular.edges

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} - Software Developer`} />
      <div className="container">
        <header className="profile">
          <div className="header-home">
            <Link to="/about" className="link">
              <img
                alt={config.siteTitle}
                src="../../images/profile.jpeg"
                className="selfie"
              />
            </Link>

            <h1 className="title">{config.siteTitle}</h1>
            <p className="description">
              Node.js Dev, Loves Elixir, FP & <span>Open Source</span>
            </p>

            <div className="social-buttons">
              <div className="sb_1">
                <a
                  href="https://www.facebook.com/skarif2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="sb_2" icon={faFacebookF} />
                </a>
                <a
                  href="https://twitter.com//skarif2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="sb_2" icon={faTwitter} />
                </a>
                <a
                  href="https://twitter.com/sk_arif2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="sb_2" icon={faGithub} />
                </a>
                <a
                  href="https://linkedin.com/in//skarif2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="sb_2" icon={faLinkedin} />
                </a>
                <a
                  href="https://stackoverflow.com/users/5786171/sk-arif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="sb_2" icon={faStackOverflow} />
                </a>
              </div>
            </div>
          </div>
        </header>

        <hr className="hr-text" data-content="⋯" />

        <div className="content-section">
          <section className="section">
            <h2>Latest Blogs</h2>
            <PostList simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Latest Blogs</h2>
            <PostList simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Open Source</h2>
            <PorjectList projects={projects} />
          </section>

          <section className="section">
            <h2>`Other People&apos;s Opinions`</h2>
            <QuoteList quotes={quotes} />
          </section>
        </div>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    latest: PropTypes.shape({
      edges: PropTypes.array,
    }),
    popular: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

export default HomePage
