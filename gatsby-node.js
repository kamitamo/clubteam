const path = require(`path`)
const _ = require("lodash")
const { NONAME } = require("dns")
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    // Page Templates
    const pageTemplate = path.resolve("src/templates/page-template.js")
    const blogTemplate = path.resolve("src/templates/post.js")
    const tagTemplate = path.resolve("src/templates/tags.js")
    const catTemplate = path.resolve(`./src/templates/category.js`)

    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              tags
              category
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

    if (result.errors) {
        console.error(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogTemplate,
            context: {
                slug: node.frontmatter.path,
            },
        })
    })

    // Create blog list pages
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10 // Change for number posts to display per page
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/journal` : `/journal/${i + 1}`,
            component: path.resolve("./src/templates/journal-template.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

    // Make Tag Pages
    const tags = result.data.tagsGroup.group

    tags.forEach((tag, i) => {
        createPage({
            //      path: `/tags/${_.kebabCase(tag.fieldValue)}`,
            path: `/tags/${tag.fieldValue}`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
    })

    // create Category pages
    let categories = []
    const categoryPerPage = 10 // Change for number posts to display per page
    _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.category')) {
            categories.push(edge.node.frontmatter.category)
        }
    })
    // Eliminate duplicate categorya
    categories = _.uniq(categories)
    // Make category pages
    categories.forEach((category,i) => {
        createPage({
            path: `/category/${category}/`,
            component: catTemplate,
            context: {
                limit: categoryPerPage,
                skip: i * categoryPerPage,
                category,
            },
        })
    })


}

// for google-calendar
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullcalendar\/google-calendar/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// rss
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

