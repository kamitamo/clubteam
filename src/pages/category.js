import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from "../components/SEO"
import Layout from '../components/Layout'
import PropTypes from "prop-types"




const CategoryPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (

    <Layout>
        <Seo title="カテゴリ" />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Category</h2>
                        <p>カテゴリ</p>
                    </header>
                </div>
            </section>

            <section id="two">
                <div className="inner">
                    <ul style={{'listStyleType':'none'}} className="actions vertical">
                        {group.map(category => (
                            <li key={category.fieldValue}>
                                <Link to={`/category/${category.fieldValue}`} >
                                    {category.fieldValue} ({category.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    </Layout>
)

CategoryPage.propTypes = {
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

export default CategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [frontmatter___category], order: DESC}
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
