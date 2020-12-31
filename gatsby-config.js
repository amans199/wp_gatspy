const path = require(`path`)


module.exports = {
  siteMetadata: {
    title: `WP_Gatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@amans199`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordPress",
        url: "https://www.wp_gatsby.test/graphql",
        refetchInterval: 60
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
