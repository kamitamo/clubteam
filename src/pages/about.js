import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/SEO'

import pic01 from '../images/esn80.jpg'
import logo from '../images/logo.png'
import about from '../images/about.jpg'

const AboutPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="クラブについて" />

            <section id="banner" className="style7" style={{backgroundImage: `url(${about})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>About</h2>
                        <p>クラブについて</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">
                    <img className="image right" src={logo} alt="エスブランコロゴ" />
                    <h4>クラブ名</h4>
                    <p>
                        FC Esblanco(エスブランコ)
                        <br/>
                        <br/>
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
                    <img className="image fit" src={pic01} alt="エスブランコの歴史" />
                    <h5>1994年</h5>
                    <p>クラブの前身となる「中小岩少年サッカークラブ」として部員22名で創設</p>
                    <h5>2002年</h5>
                    <p>クラブ名をFC Esblanco(FCエスブランコ）に改名</p>
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
