import React from "react"
import { Link, graphql } from "gatsby"
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
