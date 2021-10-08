import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/SEO'

import logo from '../images/logo.png'
import about from '../images/about.jpg'

const AboutPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="クラブについて" image={`${about}`} />

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
                    <span className="image right" ><img src={logo} alt="エスブランコロゴ" /></span>
                    <h4>クラブ名</h4>
                    <ul style={{'listStyleType':'none'}}>
                        <li>FC Esblanco</li>
                    </ul>

                    <h4>所属</h4>
                    <ul style={{'listStyleType':'none'}}>
                        <li>東京江戸川区サッカー連盟少年部</li>
                        <li>東京都第２ブロック</li>
                    </ul>
                    <h4>クラブ方針</h4>
                    <ul style={{'listStyleType':'none'}}>
                        <li>基本技術を習得し、次のステージでも活躍できる選手を目指す</li>
                    </ul>
                    <h4>沿革</h4>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1994年</td>
                                    <td>クラブの前身となる「中小岩少年サッカークラブ」として部員22名で創設</td>
                                </tr>
                                <tr>
                                    <td>2002年</td>
                                    <td>クラブ名をFC Esblanco(エスブランコ）に改名</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>OB選手の主な進路</h4>
                    <div className="table-wrapper">
                        <table >
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2012年度</td>
                                    <td>FC東京U-15深川、エスフォルソFC2名、バルドラール浦安、ヴェルディSSレスチ2名</td>
                                </tr>
                                <tr>
                                    <td>2013年度</td>
                                    <td>エスフォルソFC、SKオンゼ、両国FC</td>
                                </tr>
                                <tr>
                                    <td>2014年度</td>
                                    <td>エスフォルソFC、ヴェルディSSレスチ</td>
                                </tr>
                                <tr>
                                    <td>2015年度</td>
                                    <td>SPフッチ、両国FC、KSCウェルネス2名、JUNS SC5名、フレンドリー、フレンドリーレディース4名</td>
                                </tr>
                                <tr>
                                    <td>2016年度</td>
                                    <td>JSC CHIBA、KSCウェルネス</td>
                                </tr>
                                <tr>
                                    <td>2017年度</td>
                                    <td>JUNS SC、ナサロットFC、FCエルマナ</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>その他、中体連サッカー部にて多数活躍中</p>
                    </div>
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
