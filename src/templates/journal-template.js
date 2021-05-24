import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import PropTypes from "prop-types"
import ResultHeader from "../components/ResultHeader"



const JournalTemplate = ( props) => {
    
    const { edges } = props.data.allMarkdownRemark

    const { currentPage, numPages } = props.pageContext

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

                <section id="three" >
                    <div className="inner center">
                        <Pagination numPages={numPages} currentPage={currentPage} pathBase="/journal/" />
                    </div>
                </section>


            </div>
        </Layout>
    )
}

JournalTemplate.propTypes = {
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

export default JournalTemplate

export const journalQuery = graphql`
  query journalQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
