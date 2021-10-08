import React from "react"
import { graphql } from "gatsby"
import BlogItem from "../components/BlogItemImage"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import PropTypes from "prop-types"

import pic06 from '../images/result.jpg'


//const Category = ({ pageContext, data }) => {
const Category = (props) => {

    const { edges } = props.data.allMarkdownRemark

    const { category } = props.pageContext

    return (
        <Layout>
            <Seo title="試合結果" image={`${pic06}`} />

            <section id="banner" style={{backgroundImage: `url(${pic06})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Result</h2>
                        <p>{category}</p>
                    </header>
                    
                    {/*
                    <div className="TagArea">
                        <ul className="actions horizontal">
                            <li><Link to={`/category/${category}`} className="button rounded">{category}</Link></li>
                        </ul>
                    </div>
                     */}
                </div>
            </section>

            <div id="main">
                <section id="two" className="tiles">
                    {edges.map(({ node }, index) => {
                        return <BlogItem nodeObj={node} key={index} />
                    })}
                    
                </section>

            </div>
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
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`
