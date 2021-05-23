import React from "react"
import { Link, graphql } from "gatsby"
import BlogItem from "../components/BlogItemImage"
import Seo from "../components/SEO"
import Layout from "../components/Layout"

import pic06 from '../images/result.jpg'


const Category = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges } = data.allMarkdownRemark

    return (
        <Layout>
            <Seo title="カテゴリ" />
            <div id="main">
                <section id="banner" style={{backgroundImage: `url(${pic06})`}}>
                    <div className="inner">
                        <header className="major">
                            <h2>Result</h2>
                            <p>{category}</p>
                        </header>

                        <div className="TagArea">
                            <ul className="actions horizontal">
                                <li><Link to={`/category/2021年度U-12`} className="button rounded ">U-12(6年生)</Link></li>
                                <li><Link to={`/category/2021年度U-11`} className="button rounded ">U-11(5年生)</Link></li>
                                <li><Link to={`/category/2021年度U-10`} className="button rounded ">U-10(4年生)</Link></li>
                                <li><Link to={`/category/2021年度U-09`} className="button rounded ">U-09(3年生)</Link></li>
                                <li><Link to={`/category/2021年度U-08`} className="button rounded ">U-08(2年生)</Link></li>
                                <li><Link to={`/category/2021年度U-07`} className="button rounded ">U-07(1年生)</Link></li>
                                <li><Link to={`/category/2021年度U-06`} className="button rounded ">U-06(キッズ)</Link></li>
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

                </div>

            </div>
        </Layout>
    )
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
