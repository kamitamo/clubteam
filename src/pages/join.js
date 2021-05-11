import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from "../components/SEO"

const JoinUsPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo
                title="Join"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Join</h2>
                            <p>入部について</p>
                        </header>
                        <p>
                            FCエスブランコでは男女問わず園児(年少)〜随時メンバーを募集しております。<br/>
                            <br/>
                            江戸川区在住、近隣地域の園児、小学生であれば、どなたでも入部できます。  <br/>
                            お試しで一度やってみたい、という方のために体験入部も受け付けています。  <br/>
                            体験・見学 お気軽にお問い合わせください。  <br/>
                            お問い合わせは <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ" title="メール">info@fc-esblanco.com</a> までお願い致します。<br/>
                        </p>
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default JoinUsPage
export const JoinUsPageQuery = graphql`
  query JoinUsPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
