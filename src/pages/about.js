import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/SEO'

import logo from '../images/logo.png'

const AboutPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo
                title="About"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>About</h2>
                            <p>クラブについて</p>
                        </header>
                        
                        <h4>クラブ名</h4>
                        <p>
                            FC Esblanco (FCエスブランコ)
                        </p>

                        <h4>エンブレム</h4>
                        <p>
                            <img src={logo} alt="FC Esblanco" />
                        </p>
                        <h4>所属</h4>
                        <p>
                            江戸川区サッカー連盟少年部所属東京都第２ブロック（江戸川区・葛飾区）
                        </p>
                        <h4>クラブ方針</h4>
                        <p>
                            基本技術を習得し、次のステージでも活躍できる選手を目指す
                        </p>
                        <h4>沿革</h4>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <h5>1994年</h5>
                                <p>クラブの前身となる「中小岩少年サッカークラブ」として部員22名で創設</p>
                            </div>
                            <div className="col-6">
                                <h5>2002年</h5>
                                <p>クラブ名をFC Esblanco(FCエスブランコ）に改名</p>
                            </div>
                        </div>
                        <h4>OB選手の主な進路</h4>
                        <dl>
                            <dt>2017年度</dt>
                            <dd>
                                <p>JUNS SC、ナサロットFC、FCエルマナ</p>
                            </dd>
                            <dt>2016年度</dt>
                            <dd>
                                <p>JSC CHIBA、KSCウェルネス</p>
                            </dd>
                            <dt>2015年度</dt>
                            <dd>
                                <p>SPフッチ、両国FC、KSCウェルネス2名、JUNS SC5名、フレンドリー、フレンドリーレディース4名</p>
                            </dd>
                            <dt>2014年度</dt>
                            <dd>
                                <p>エスフォルソFC、ヴェルディSSレスチ</p>
                            </dd>
                            <dt>2013年度</dt>
                            <dd>
                                <p>エスフォルソFC、SKオンゼ、両国FC</p>
                            </dd>
                            <dt>2012年度</dt>
                            <dd>
                                <p>FC東京U-15深川、エスフォルソFC2名、バルドラール浦安、ヴェルディSSレスチ2名</p>
                            </dd>
                            <p>その他、中体連サッカー部にて多数活躍中</p>
                        </dl>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage
export const AboutPageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
