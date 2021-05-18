import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"

const JournalTemplate = (props) => {
    const { edges } = props.data.allMarkdownRemark

    const { numPages } = props.pageContext

    return (
        <Layout>
            <Seo title="試合結果" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Result</h2>
                            <p>試合結果</p>
                        </header>

                        {edges.map(({ node }, index) => {
                            return <BlogItem nodeObj={node} key={index} />
                        })}
                        {/* Paging controls
                            If there are multiple pages, show pager */}
                        {numPages > 1 && (
                            <>
                                <ul className="pagination">
                                    <li>
                                        {Array.from({ length: numPages }, (_, i) => (
                                            <Link
                                                to={`/journal/${i === 0 ? "" : i + 1}`} 
                                                key={`pagination-numbers${i + 1}` }
                                                className="page" >
                                                {i + 1} {}
                                            </Link>
                                        ))}
                                    </li>
                                </ul>
                            </>
                        )}
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
