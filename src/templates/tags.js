import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import BlogItem from "../components/BlogItem"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
//import Pagination from "../components/Pagination"

import logo from '../images/logo.png'
const Tags = ({ pageContext, data }) => {
    const { edges } = data.allMarkdownRemark
    const { tag } = pageContext
 return (
    <Layout>
        <Seo title="Tags"  image={`${logo}`} />
        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>タグ</h2>
                        <p>{tag}</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <section id="two" >
                    <div className="inner">
                    {edges.map(({ node }, index) => {
                        return <BlogItem nodeObj={node} key={index} />
                    })}
                    </div>
                </section>


            </div>
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
    filter: {frontmatter: { category: {regex: "/2022年度/" } tags: {in: [$tag] },
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
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`
