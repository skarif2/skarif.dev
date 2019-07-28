import React from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { Link } from 'gatsby';

import Layout from '../layout'
import config from '../../data/SiteConfig'

const HomePage = () => {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} - Software Developer`} />
      <header>
        <div>
          <Link to='/about'>
            <img alt={config.siteTitle} src='../../images/profile.jpeg' />
          </Link>
          <h1>{config.siteTitle}</h1>
          <p>
            {`Software Developer at Invariant Telecom`}
          </p>
          <p>
            {`working on Payment System`}
          </p>
        </div>
        <div>
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
        <br />
      </header>
    </Layout>
  )
}

export default HomePage
