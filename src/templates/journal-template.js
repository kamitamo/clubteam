import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import BlogItem from "../components/BlogItemImage"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"

import pic06 from '../images/result.jpg'

//import logo from '../images/logo.png'


const JournalTemplate = ( props) => {
    
    const { edges } = props.data.allMarkdownRemark

    const { currentPage } = props.pageContext

    return (
        <Layout>
            <Seo title="試合結果" image={`${pic06}`} />

            <section id="banner" style={{backgroundImage: `url(${pic06})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Result</h2>
                        <p>試合結果</p>
                    </header>
                    
                    <div className="TagArea">
                        <ul className="actions horizontal">
                            <li><Link to={`/category/2022年度U-12`} className="button rounded">U-12(6年生)</Link></li>
                            <li><Link to={`/category/2022年度U-11`} className="button rounded">U-11(5年生)</Link></li>
                            <li><Link to={`/category/2022年度U-10`} className="button rounded">U-10(4年生)</Link></li>
                            <li><Link to={`/category/2022年度U-09`} className="button rounded">U-09(3年生)</Link></li>
                            <li><Link to={`/category/2022年度U-08`} className="button rounded disabled">U-08(2年生)</Link></li>
                            <li><Link to={`/category/2022年度U-07`} className="button rounded disabled">U-07(1年生)</Link></li>
                            <li><Link to={`/category/2022年度U-06`} className="button rounded disabled">U-06(キッズ)</Link></li>
                        </ul>

                    </div>
                </div>
            </section>
            
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

                {/*
                   <section id="four">
                   <div className="inner">
                   <header className="major">
                   <p>タグ一覧</p>
                   </header>
                   <ul style={{'listStyleType':'none'}} className="actions horizontal">
                   {props.data.allMarkdownRemark.group.map(tag => (
                   <li key={tag.fieldValue}>
                   <Link className="button rounded small icon fa-hashtag" to={`/tags/${tag.fieldValue}`} >
                   {tag.fieldValue}
                   </Link>
                   </li>
                   ))}
                   </ul>
                   </div>
                   </section>               
                 */}
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
            regex: "/2022年度/"
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
