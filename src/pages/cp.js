import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import cp202106 from '../images/202106cp_img.jpg'

const CpPage = ({
    data: {
        site
    },

}) => {
    return (
        <Layout>
            <Seo title="キャンペーン"  />

            <section id="banner">
                <div className="inner">
                    <header className="major">
                        <h2>Campaign</h2>
                        <p>新生活応援キャンペーン</p>
                    </header>

                </div>
            </section>
            
            <div id="main">
                <div className="inner">
                    <img className="image fit" src={cp202106} alt="エスブランコキャンペーン" />
                    <strong>FC Esblancoでは、年少〜小学１年生を対象にキャンペーンを実施してます</strong>
                    <hr/>
                    <dl>
                        <dt>対象</dt>
                        <dd>
                            <p>キッズ（年少〜）、小学１年生</p>
                        </dd>
                        <dt>期間</dt>
                        <dd>
                            <p>2021年6月〜2021年8月末</p>
                        </dd>
                        <dt>条件</dt>
                        <dd>
                            <p>キャンペーン期間中に入会した場合、月謝３ヶ月分を無料</p>
                        </dd>
                    </dl>
                    <hr/>
                    <strong>体験・見学 お気軽にお問い合わせ下さい</strong><br/>
                    <ul className="actions fit small rounded">
                        <li>
                            <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ(cp)" title="メール" className="button special fit small">問い合わせる</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default CpPage
export const CpPageQuery = graphql`
  query CpPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

