import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import PropTypes from "prop-types"


import pic06 from '../images/result.jpg'

const JournalTemplate = ( props) => {
    
    const { edges } = props.data.allMarkdownRemark

    const { currentPage, numPages } = props.pageContext

    return (
        <Layout>
            <Seo title="試合結果" />

            <section id="banner" style={{backgroundImage: `url(${pic06})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Result</h2>
                        <p>試合結果</p>
                    </header>
                </div>
            </section>
                    <div className="TagArea">
                        <ul className="actions horizontal">
                            <li><Link to={`/category/2021年度U-12`} className="button rounded small">U-12(6年生)</Link></li>
                            <li><Link to={`/category/2021年度U-11`} className="button rounded small">U-11(5年生)</Link></li>
                            <li><Link to={`/category/2021年度U-10`} className="button rounded small">U-10(4年生)</Link></li>
                            <li><Link to={`/category/2021年度U-09`} className="button rounded small">U-09(3年生)</Link></li>
                            <li><Link to={`/category/2021年度U-08`} className="button rounded small">U-08(2年生)</Link></li>
                            <li><Link to={`/category/2021年度U-07`} className="button rounded small">U-07(1年生)</Link></li>
                            <li><Link to={`/category/2021年度U-06`} className="button rounded small">U-06(キッズ)</Link></li>
                        </ul>
                    </div>

            
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
