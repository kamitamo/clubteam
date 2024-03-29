/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `FC Esblanco`,
        titleTemplate: `%s | FC Esblanco(FCエスブランコ)は、江戸川区小岩地区を中心に活動している少年サッカークラブです`,
        description: `FC Esblanco(FCエスブランコ)は、江戸川区小岩地区を中心に活動している少年サッカークラブです`,
        siteUrl: `https://www.fc-esblanco.com`,
        image: `/static/logo.png`,
        author: `FC Esblanco`,
        authorSite: `https://www.fc-esblanco.com`,
        twitterUsername: `@fcesblanco`,
        twitterURL: `https://twitter.com/`,
    },
    plugins: [
        /*
        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
                code: 'fc-esblanco',
                head: true,
            },
        },
        */
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: 'UA-122189987-2',
                    // Setting this parameter is optional
                    anonymize: true
                },
                environments: ['production', 'development']
            },
        },
        {
            resolve: "gatsby-remark-related-posts",
            options: {
                posts_dir: `${__dirname}/src/content`,
                doc_lang: "ja",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-responsive-iframe`],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.fc-esblanco.com',
                sitemap: 'https://www.fc-esblanco.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.fc-esblanco.com`,
            },
        },
        `gatsby-plugin-styled-components`,
//        `gatsby-plugin-preload-fonts`,
        `gatsby-plugin-preact`,
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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "UA-122189987-2", // Google Analytics / GA
                ],
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
                                    title: edge.node.frontmatter.title + ' ' + edge.node.frontmatter.date + ' ' + edge.node.frontmatter.description,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    //custom_elements: [{ "content:encoded": edge.node.html }],
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
                                     date(formatString: "YYYY-MM-DD")
                                     path
                                     title
                                     description
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
