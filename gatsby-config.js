module.exports = {
  siteMetadata: {
    title: `Gain the Power from Akabeko`,
    description: '赤べこは、天然痘などが流行した時代から、疾病避けのお守りとしても知られています。赤べこを信じよう。',
    author: `@kuropen_aizu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gain the Power from Akabeko`,
        short_name: `Akabeko`,
        start_url: `/`,
        background_color: `#E53E3E`,
        theme_color: `#E53E3E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://rocky-springs-68685.herokuapp.com/stg",
        rootKey: "products",
      },
    },
    {
      resolve: 'gatsby-plugin-ackee-tracker',
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: '0318a163-5361-4c07-a0d4-1cd992caffeb',
        // URL to Server eg: "https://analytics.test.com".
        server: 'https://ackee.eternie-labs.net',
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // Enable or disable the tracking of your own visits (as identified by your login to the Ackee dashboard).
        ignoreOwnVisits: false,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: false,
      },
    },
  ],
}
