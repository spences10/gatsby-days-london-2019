const siteMetadata = {
  title: `Gatsby Days - London 2019`,
  description: `Gatsby Days - London 2019, a day of all things Gatsby.`,
  author: `Scott Spence`,
  author: `@spences10`,
  // imageUrl: `favicon.png`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        // disable gatsby-mdx plugin – use this when your site already uses gatsby-mdx
        mdx: true,
        // source directory for decks
        contentPath: `src/slides`,
        basePath: '/',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-days-london-2019`,
        short_name: `gbdy2019`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
  ],
}
