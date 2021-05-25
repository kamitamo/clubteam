import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import ResultHeader from "../components/ResultHeader"



const JournalTemplate = ( props) => {
    
    const { edges } = props.data.allMarkdownRemark

    const { currentPage } = props.pageContext

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

                <section id="two" >
                    <div className="inner center">
                        <Pagination numPages={Math.ceil(props.data.allMarkdownRemark.totalCount/10)} currentPage={currentPage} pathBase="/journal/" />
                    </div>
                </section>

                <section id="four">
                    <div className="inner">
                        <header className="major">
                            <p>タグ一覧</p>
                        </header>
                        <ul style={{'listStyleType':'none'}} className="actions horizontal">
                            {props.data.allMarkdownRemark.group.map(tag => (
                                <li key={tag.fieldValue}>
                                    <Link className="button rounded small icon fa-hashtag" to={`/tags/${tag.fieldValue}`} >
                                        {tag.fieldValue} ({tag.totalCount})
                                    </Link>
                                </li>
                            ))}
                        </ul>
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
      filter: {
        frontmatter: {
          category: {
            regex: "/2021年度/"
          }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
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
    }
  }
`
