import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"

import pic06 from '../images/result.jpg'

const JournalTemplate = (props) => {
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
            
            <div id="main">
                <section id="two" className="tiles">
                    {edges.map(({ node }, index) => {
                        return <BlogItem nodeObj={node} key={index} />
                    })}

                </section>

                <section id="three" >
                    <div className="inner">
                        <Pagination numPages={numPages} currentPage={currentPage} pathBase="/journal/" />
                    </div>
                </section>
            </div>
        </Layout>
    )
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
    }
  }
`
