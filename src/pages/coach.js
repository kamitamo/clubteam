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
            <Seo title="コーチ紹介" />

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
                        <div className="col-4">
                            <span className="image right"><img src={c01} alt="代表" /></span>
                            <p>篠原 和之<br/>
                                （しのはら かずゆき）<br/>
                                JFA公認D級ライセンス<br/>
                            エスブランコ代表<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>印西町立原山中学校</li>
                                <li>千葉県立津田沼高等学校</li>
                            </ul>
                            <h4>選抜歴・表彰など</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>習志野選抜（高校）</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>1995 クレストSC</li>
                                <li>1999 FCエスブランコ</li>
                            </ul>
                        </div>

                        <hr/>

                        <div className="col-4">
                            <span className="image right"><img src={c07} alt="ヘッドコーチ" /></span>
                            <p>松田 教正<br/>
                                （まつだ のりまさ）<br/>
                                JFA公認D級ライセンス<br/>
                            ヘッドコーチ<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>京都サンガJrユース</li>
                                <li>洛南高等学校</li>
                                <li>大阪産業大学(主将)</li>
                                <li>京都選抜(小学生〜中学生)</li>
                                <li>関西学生選抜候補(大学生)</li>
                            </ul>
                            <h4>選抜歴・表彰など</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>関西学生サッカーリーグ</li>
                                <li>2部ベストイレブン</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2015〜現在 エスブランコ</li>
                            </ul>
                        </div>

                        <hr/>

                        <div className="col-4">
                            <span className="image right"><img src={c03} alt="コーチ" /></span>
                            <p>越後 寛一<br/>
                                （えちご ひろかず）<br/>
                            JFA公認D級ライセンス<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>区立小岩第四中学校</li>
                                <li>私立八千代松陰高等学校</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2003〜現在 エスブランコ</li>
                                <li>2009〜2011 ファンルーツ</li>
                                <li>2011〜2012 横浜ユナイテッド</li>
                                <li>FC Barcelona Camp Assistant coach</li>
                            </ul>
                        </div>


                        <hr/>

                        <div className="col-4">
                            <span className="image right"><img src={c02} alt="コーチ" /></span>
                            <p>高城 英昭<br/>
                                （たき ひであき）<br/>
                            JFA公認D級ライセンス<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>アドバンFC Jrユース</li>
                                <li>久御山高等学校</li>
                                <li>S.F.C（東京社会人2部）</li>
                            </ul>
                            <h4>選抜歴・表彰など</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>関西選抜（小学生）</li>
                                <li>京都選抜（中学生）</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2010〜現在 エスブランコ</li>
                            </ul>
                        </div>


                        <hr/>

                        <div className="col-4">
                            <span className="image right"><img src={c05} alt="コーチ" /></span>
                            <p>神尾 航平<br/>
                                （かみお こうへい）<br/>
                            JFA公認C級ライセンス<br/>
                            JFA公認C級(GK)ライセンス<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>小岩第一中学校</li>
                                <li>都立東高等学校</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2018〜現在 エスブランコ</li>
                            </ul>
                        </div>

                        <hr />

                        <div className="col-4">
                            <span className="image right"><img src={c08} alt="コーチ" /></span>
                            <p>坂本 憲吾<br/>
                            （さかもと　けんご）<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2010〜2013FC習志野Jr.ユース</li>
                                <li>都立小岩高等学校</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2018〜現在 エスブランコ</li>
                            </ul>
                        </div>

                        <hr/>


                        <div className="col-4">
                            <span className="image right"><img src={c06} alt="コーチ" /></span>
                            <p>高良 真哉<br/>
                                （たから しんや）<br/>
                            JFA公認D級ライセンス<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>小岩第三中学校</li>
                                <li>都立葛飾野高等学校</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2011〜現在 エスブランコ</li>
                            </ul>
                        </div>


                        <hr/>


                        <div className="col-4">
                            <span className="image right"><img src={c09} alt="コーチ" /></span>
                            <p>野口 一希<br/>
                            （のぐち かずき）<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>ヴェルディレスチJr.ユース</li>
                                <li>都立駒場高等学校</li>
                                <li>学習院大学フットサル（東京都3部）</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2018〜現在 エスブランコ</li>
                            </ul>
                        </div>


                        <hr/>

                        <div className="col-4">
                            <span className="image right"><img src={c11} alt="コーチ" /></span>
                            <p>藪田 修平<br/>
                                やぶた しゅうへい）<br/>
                            JFA公認D級ライセンス<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>交野FC(大阪府)</li>
                                <li>四條畷FC(大阪府)</li>
                                <li>久御山高校サッカー部(京都府)</li>
                                <li>関西外国語大学サッカー部</li>
                            </ul>
                            <h4>選抜歴・表彰など</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>大阪府トレセン</li>
                                <li>インターハイ京都府代表</li>
                                <li>近畿大会 第3位</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2013〜現在 エスブランコ</li>
                            </ul>
                        </div>

                        <hr/>


                        <div className="col-4">
                            <span className="image right"><img src={c12} alt="コーチ" /></span>
                            <p>吉田 俊太<br/>
                            （よしだ しゅんた）<br/></p>
                            <h4>選手歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>大阪セントラルFC（大阪府）</li>
                                <li>友渕中学校（大阪府）</li>
                                <li>桃山学院高校サッカー部（大阪府）</li>
                            </ul>
                            <h4>選抜歴・表彰など</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>大阪市トレセン</li>
                                <li>インターハイ京都府代表</li>
                                <li>近畿大会 第3位</li>
                            </ul>
                            <h4>指導歴</h4>
                            <ul style={{'listStyleType':'square'}}>
                                <li>2007〜2010 ピュアFC(大阪府)</li>
                                <li>2013〜FCエスブランコ</li>
                            </ul>
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
