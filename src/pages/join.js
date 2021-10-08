import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

//import logo from '../images/logo.png'

import pic05 from '../images/join.jpg'

const JoinUsPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="入部について"  image={`${pic05}`} />

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
                    
                    <h5>体験・見学 お気軽にお問い合わせください。</h5>
                    <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ(j)" title="メール" className="button special fit rounded">問い合わせる</a>
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
