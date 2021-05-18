import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import c01 from '../images/c01.jpg'
import c02 from '../images/c02.jpg'
import c03 from '../images/c03.jpg'
import c05 from '../images/c05.jpg'
import c06 from '../images/c06.jpg'
import c07 from '../images/c07.jpg'
import c08 from '../images/c08.jpg'
import c09 from '../images/c09.jpg'
import c11 from '../images/c11.jpg'
import c12 from '../images/c12.jpg'

import pic02 from '../images/coach.jpg'

const CoachPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="Coach" />

            <section id="banner" className="style7" style={{backgroundImage: `url(${pic02})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Coach</h2>
                        <p>コーチ紹介</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <br/>
                            <img src={c01} alt="コーチ" />
                            <p>
                                エスブランコ代表<br/>

                                篠原 和之（しのはら かずゆき）<br/>
                                ライセンス JFA公認D級<br/>
                                選手歴<br/>
                                印西町立原山中学校<br/>
                                千葉県立津田沼高等学校<br/>
                                選抜歴・表彰など<br/>
                                習志野選抜（高校）<br/>
                                指導歴
                                1995 クレストSC<br/>
                                1999 FCエスブランコ<br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c07} alt="コーチ" />
                            <p>
                                ヘッドコーチ<br/>

                                松田 教正（まつだ のりまさ）<br/>
                                ライセンス JFA公認D級<br/>
                                選手歴 京都サンガJrユース<br/>洛南高等学校<br/>大阪産業大学(主将)<br/>
                                選抜歴 表彰など 京都選抜(小学生〜中学生)<br/>関西学生選抜候補(大学生)<br/>関西学生サッカーリーグ<br/>2部ベストイレブン<br/>
                                指導歴 2015〜現在 エスブランコ  <br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c03} alt="コーチ" />
                            <p>
                                越後 寛一（えちご ひろかず）<br/>
                                ライセンス JFA公認D級<br/>
                                選手歴 区立小岩第四中学校 私立八千代松陰高等学校<br/>
                                指導歴 2003 現在 エスブランコ  <br/>
                                2009〜2011 ファンルーツ  <br/>
                                2011〜2012 横浜ユナイテッド  <br/>
                                FCバルセロナキャンプ アシスタントコーチ<br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c02} alt="コーチ" />
                            <p>
                                高城 英昭（たき ひであき）<br/>
                                ライセンス JFA公認D級<br/>
                                選手歴   アドバンFC Jrユース<br/>久御山高等学校<br/>S.F.C（東京社会人2部）<br/>
                                選抜歴 表彰など 関西選抜（小学生）<br/>京都選抜（中学生）<br/>
                                指導歴   2010〜現在 エスブランコ  <br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c05} alt="コーチ" />
                            <p>
                                神尾 航平（かみお こうへい）<br/>
                                ライセンス JFA公認C級<br/>JFA公認C級(GK)<br/>
                                選手歴   小岩第一中学校<br/>都立東高等学校<br/>
                                指導歴   2018〜現在 エスブランコ  <br/>
                            </p>
                        </div>

                        <hr />

                        <div className="col-6">
                            <br/>
                            <img src={c08} alt="コーチ" />
                            <p>
                                坂本 憲吾（さかもと　けんご）<br/>
                                選手歴   2010〜2013FC習志野Jr.ユース<br/>都立小岩高等学校<br/>
                                指導歴   2018〜現在 エスブランコ  <br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c06} alt="コーチ" />
                            <p>
                                高良 真哉（たから しんや）<br/>
                                ライセンス JFA公認D級<br/>
                                選手歴   小岩第三中学校<br/>都立葛飾野高等学校<br/>
                                指導歴   2011〜現在 エスブランコ  <br/>
                            </p>
                        </div>


                        <div className="col-6">
                            <br/>
                            <img src={c09} alt="コーチ" />
                            <p>
                                野口 一希（のぐち かずき）<br/>
                                選手歴 ヴェルディレスチJr.ユース<br/>都立駒場高等学校<br/>学習院大学フットサル（東京都3部）<br/>
                                指導歴 2018〜現在 エスブランコ  <br/>
                            </p>
                        </div>

                        <div className="col-6">
                            <br/>
                            <img src={c11} alt="コーチ" />
                            <p>
                                藪田 修平やぶた しゅうへい）<br/>
                                    ライセンス JFA公認D級<br/>
                                    選手歴 交野FC(大阪府)<br/>四條畷FC(大阪府)<br/>久御山高校サッカー部(京都府)<br/>関西外国語大学サッカー部<br/>
                                    選抜歴 表彰など 大阪府トレセン<br/>インターハイ京都府代表<br/>近畿大会 第3位<br/>
                                    指導歴 2013〜現在 エスブランコ  <br/>
                                </p>
                            </div>

                            <div className="col-6">
                                <br/>
                                <img src={c12} alt="コーチ" />
                                <p>
                                    吉田 俊太（よしだ しゅんた）<br/>
                                    選手歴 大阪セントラルFC（大阪府）<br/>友渕中学校（大阪府）<br/>桃山学院高校サッカー部（大阪府）<br/>
                                    選抜歴 大阪市トレセン<br/>インターハイ京都府代表<br/>近畿大会 第3位<br/>
                                    指導歴 2007〜2010 ピュアFC(大阪府)<br/>2013〜FCエスブランコ<br/>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CoachPage
export const CoachPageQuery = graphql`
  query CoachPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
