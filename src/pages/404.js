import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import logo from '../images/logo.png'


const NotFoundPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo
                title="ページが見つかりません"
                image={`${logo}`}
            />

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <h1>ページが見つかりません</h1>
                        <ul className="actions">
                            <li><a href="/" className="button next scrolly">HOME</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default NotFoundPage
export const NotFoundPageQuery = graphql`
  query NotFoundPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
