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
        icon: `public/images/icons/favicon-16x16.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: [`Arcade Love`, `Get Ready`, `High Score`, `Insert Coin`, `Mytendo`, `Pixel Matrix`, `Push Start`, `Small Print`, `Sorry Game Over`]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
