module.exports = {
  siteMetadata: {
    title: `Behind Proxyz`,
    description: `A story of Tools and Proxies`,
    author: `Andrey Adamovich`,
    siteUrl: `https://behindpro.xyz/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/icons/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https:/behindpro.xyz/',
          site_name: 'Behind Proxies',
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'https://behindpro.xyz/static/images/icons/favicon.png',
        },
      },
    },
  ],
}
