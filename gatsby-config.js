const config = require('./data/SiteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: `https://skarif.io`,
    title: config.siteTitle,
    author: config.siteAuthor
  },
  plugins: [{
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
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
          'gatsby-remark-prismjs',
          `gatsby-remark-reading-time`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
            },
          },
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
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        display: 'minimal-ui',
        icon: `static/favicon.webp`,
      },
    }
  ]
}