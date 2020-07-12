/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/gatsbyPortfolio",
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
      fonts: [{
              family: `Tangerine`,
              variants: [`400`, `700`]
          }],
      },
    },  
    `gatsby-plugin-styled-components`,
  ],
}
