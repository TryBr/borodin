if ((process.env.NODE_ENV === "development") || (process.env.NODE_ENV === "dev") || (process.env.NODE_ENV === "production")) {
  require("dotenv").config();
}

module.exports = {
  siteMetadata: {
    title: `Веб-дизайн и разработка для бизнеса | Дмитрий Бородин`,
    description: `Веб-дизайн и разработка для бизнеса | Дмитрий Бородин`,
    author: `me`,
    siteUrl: `https://borodin.rocks`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `Веб-дизайн и разработка для бизнеса | Дмитрий Бородин`,
        short_name: `Веб-дизайн и разработка для бизнеса`,
        start_url: `/`,
        background_color: `#223463`,
        theme_color: `#223463`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     // The ID of yandex metrika.
    //     trackingId: 54720262,
    //     // Enabled a webvisor. The default value is `false`.
    //     webvisor: true,
    //     // Enables tracking a hash in URL. The default value is `false`.
    //     trackHash: true,
    //     // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
    //     // and `true` means after the body (faster loading, less hits). The default value is `false`.
    //     afterBody: true,
    //     // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
    //     // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
    //     defer: false,
    //     useCDN: true,
    //   }, d
    // },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Главная",
          crumbSeparator: "/",
        }
      }
    }
  ],
}
