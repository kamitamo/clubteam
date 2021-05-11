/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `FC Esblanco`,
        titleTemplate: `%s | FC Esblanco`,
        description: `FCエスブランコは、江戸川区小岩地区を中心に活動している少年サッカークラブです`,
        siteUrl: `https://www.fc-esblanco.com`,
        image: `/images/logo.png`,
        author: `FC Esblanco`,
        authorSite: `https://www.fc-esblanco.com`,
        twitterUsername: `@fcesblanco`,
        twitterURL: `https://twitter.com/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `FC Esblanco`,
                short_name: `FC Esblanco`,
                start_url: `/`,
                background_color: `#0027EC`,
                theme_color: `#0027EC`,
                display: `standalone`,
                icon: `static/logo.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "ENTER YOUR GA TRACKING ID HERE",
                head: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contentImages`,
                path: `${__dirname}/src/content/images`,
            },
        },

        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                    custom_elements: [{ "content:encoded": edge.node.html }],
                                })
                            })
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
                        output: "/rss.xml",
                        title: "FC Esblanco",
                        // optional configuration to insert feed reference in pages:
                        // if `string` is used, it will be used to create RegExp and then test if pathname of
                        // current page satisfied this regular expression;
                        // if not provided or `undefined`, all pages will have feed reference inserted
                        //match: "^/post/",
                        // optional configuration to specify external rss feed, such as feedburner
                        //link: "https://feeds.feedburner.com/gatsby/blog",
                    },
                ],
            },
        },
    ],
}
