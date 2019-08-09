import React from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { Link } from 'gatsby';

import Layout from '../layout'
import PostList from '../components/PostList'
import PorjectList from '../components/ProjectList'
import config from '../../data/SiteConfig'

const HomePage = () => {
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
          <h2>Blogs</h2>
          <PostList />
        </section>

        <section className="container">
          <h2>Open Source</h2>
          <PorjectList />
        </section>
      </div>
    </Layout>
  )
}

export default HomePage
