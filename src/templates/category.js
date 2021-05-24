import React from "react"
import { graphql } from "gatsby"
import BlogItem from "../components/BlogItemImage"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
import ResultHeader from "../components/ResultHeader"


//const Category = ({ pageContext, data }) => {
const Category = (props) => {

    const { edges } = props.data.allMarkdownRemark

    return (
        <Layout>
            <Seo title="試合結果" />

            <ResultHeader />

            <div id="main">
                <section id="two" className="tiles">
                    {edges.map(({ node }, index) => {
                        return <BlogItem nodeObj={node} key={index} />
                    })}

                </section>


            </div>



        </Layout>
    )
}

Category.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default Category

export const pageQuery = graphql`query ($category: String) {
  allMarkdownRemark(
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
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        excerpt
      }
    }
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
  }
}
`
