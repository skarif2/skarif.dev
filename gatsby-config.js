/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://skarif.io`,
    title: 'Sk Arif',
    author: 'Sk Arif'
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/*.css': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              maintainCase: false,
              removeAccents: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#111111`,
        showSpinner: false,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`
  ]
}
