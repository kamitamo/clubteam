import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import BlogItem from "../components/BlogItem"
import Seo from "../components/SEO"
import Layout from "../components/Layout"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
        <Seo title="カテゴリ" />
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Category</h2>
                        <p>{category}</p>
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

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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

export default Category

export const pageQuery = graphql`query ($category: String) {
  allMarkdownRemark(
    limit: 2000
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {category: {in: [$category]}}}
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
          category
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
