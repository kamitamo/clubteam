import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from "../components/SEO"
import Layout from '../components/Layout'
import PropTypes from "prop-types"

import logo from '../images/logo.png'


const TagsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (

    <Layout>
        <Seo title="タグ一覧" image={`${logo}`} />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Tags</h2>
                        <p>タグ</p>
                    </header>
                </div>
            </section>

            <section id="two">
                <div className="inner">
                    <ul style={{'listStyleType':'none'}} className="actions horizontal">
                        {group.map(tag => (
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

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
