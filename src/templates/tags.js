import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import BlogItem from "../components/BlogItem"
import Seo from "../components/SEO"
import Layout from "../components/Layout"

const Tags = ({ pageContext, data }) => {
    const { edges } = data.allMarkdownRemark
    const { tag } = pageContext
 return (
    <Layout>
        <Seo title="Tags" />
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Tags</h2>
                        <p>{tag}</p>
                    </header>
                </div>
            </section>

            <section id="two">
                <div className="inner">
                    <div>
                        {edges.map(({ node }, index) => {
                            return <BlogItem nodeObj={node} key={index} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            // fields: PropTypes.shape({
            //   slug: PropTypes.string.isRequired,
            // }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`query ($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {
       tags: {in: [$tag]},
       category: {regex: "/2021年度/" }
    }}
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          path
          tags
          description
          featuredImageAlt
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        excerpt
      }
    }
  }
}
`
