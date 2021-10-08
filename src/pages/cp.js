import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import logo from '../images/logo.png'

import cp202106 from '../images/202106cp_img.jpg'

const CpPage = ({
    data: {
        site
    },

}) => {
    return (
        <Layout>
            <Seo title="キャンペーン"  image={`${logo}`}  />

            <section id="banner">
                <div className="inner">
                    <header className="major">
                        <h2>Campaign</h2>
                        <p>低学年募集キャンペーン</p>
                    </header>

                </div>
            </section>
            
            <div id="main">
                <div className="inner">
                    <img className="image fit" src={cp202106} alt="エスブランコキャンペーン" />
                    <strong>FC Esblancoでは、年少〜小学１年生を対象にキャンペーンを実施してます</strong>
                    <hr/>
                    <dl>
                        <dt>特典</dt>
                        <dd>
                            <p>月謝３ヶ月分を無料</p>
                        </dd>
                        <dt>期間</dt>
                        <dd>
                            <p>2021年6月1日〜2021年8月31日</p>
                        </dd>
                        <dt>条件</dt>
                        <dd>
                            <p>小学１年生までの選手がキャンペーン期間中に入会した場合</p>
                        </dd>
                    </dl>
                    <hr/>
                    <h5>体験・見学 お気軽にお問い合わせ下さい</h5>
                    <a className="button special rounded fit" href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ(cp)" title="メール">問い合わせる</a>
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

