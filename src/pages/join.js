import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import pic05 from '../images/join.jpg'

const JoinUsPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="入部について" />

            <section id="banner" className="style7" style={{backgroundImage: `url(${pic05})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Join</h2>
                        <p>入部について</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">

                        FCエスブランコでは、男女問わず園児(年少)〜随時メンバーを募集しております。<br/>
                        <br/>
                        江戸川区在住、近隣地域の園児、小学生であれば、どなたでも入部できます。  <br/>
                        お試しで一度やってみたい、という方のために体験入部も受け付けています。  <br/>
                        <br/>
                        体験・見学 お気軽にお問い合わせください。<br/>
                        <ul className="actions fit small rounded">
                            <li>
                                <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ(j)" title="メール" className="button special fit small">問い合わせる</a>
                            </li>
                        </ul>
                </div>
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
