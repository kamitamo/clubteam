import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import kyubu_fukubu_taibu from '../pdf/kyubu_fukubu_taibu.pdf'
import Seo from "../components/SEO"

const DocPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo
                title="Documents"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Document</h2>
                            <p>ドキュメント</p>
                        </header>

                        <a href={kyubu_fukubu_taibu} title="休部・復部・退部届" class="normal" target="_blank" rel="noopener noreferrer">休部・復部・退部届</a>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default DocPage
export const DocPageQuery = graphql`
  query DocPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
