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
                        <div className="col-3">

                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c01} alt="代表" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            篠原 和之<br/>
                                            <span style={{'font-size': '0.5em'}}>SHINOHARA KAZUYUKI</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>代表</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>印西町立原山中学校<br/>千葉県立津田沼高等学校<br/>習志野選抜（高校）</td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>1995 クレストSC<br/>1999 FCエスブランコ</td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>D級ライセンス</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>

                        <hr/>
                        
                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c07} alt="ヘッドコーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            松田 教正<br/>
                                            <span style={{'font-size': '0.5em'}}>MATSUDA NORIMASA</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>ヘッドコーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>京都サンガJrユース<br/>洛南高等学校<br/>大阪産業大学(主将)<br/>京都選抜(小学生〜中学生)<br/>関西学生選抜候補(大学生)<br/>関西学生サッカーリーグ<br/>2部ベストイレブン</td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2015〜現在 エスブランコ</td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>D級ライセンス</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>

                        <hr/>
                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c03} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            越後 寛一<br/>
                                            <span style={{'font-size': '0.5em'}}>ECHIGO HIROKAZU</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            区立小岩第四中学校<br/>
                                            私立八千代松陰高等学校<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>
                                            2003〜現在 エスブランコ<br/>
                                            2009〜2011 ファンルーツ<br/>
                                            2011〜2012 横浜ユナイテッド<br/>
                                            FC Barcelona Camp Assistant coach<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>D級ライセンス</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>

                        <hr/>

                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c02} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            高城 英昭<br/>
                                            <span style={{'font-size': '0.5em'}}>TAKI HIDEAKI</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            アドバンFC Jrユース<br/>
                                            久御山高等学校<br/>
                                            S.F.C（東京社会人2部）<br/>
                                            関西選抜（小学生）<br/>
                                            京都選抜（中学生）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2010〜現在 エスブランコ</td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>D級ライセンス</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>

                        <hr/>

                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c05} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            神尾 航平<br/>
                                            <span style={{'font-size': '0.5em'}}>KAMIO KOUHEI</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            小岩第一中学校<br/>都立東高等学校
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2012〜現在 エスブランコ</td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>C級ライセンス<br/>C級ライセンス(GK)</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>


                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c08} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            坂本 憲吾<br/>
                                            <span style={{'font-size': '0.5em'}}>SAKAMOTO KENGO</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            都立小岩高等学校<br/>2010〜2013FC習志野Jr.ユース
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2018〜現在 エスブランコ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c06} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            高良 真哉<br/>
                                            <span style={{'font-size': '0.5em'}}>TAKARA SHINYA</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            小岩第三中学校<br/>都立葛飾野高等学校
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2011〜現在 エスブランコ</td>
                                    </tr>
                                    <tr>
                                        <td>資格</td>
                                        <td>D級ライセンス</td>
                                    </tr>                                        
                                </tbody>
                            </table>
                        </div>


                        <hr />

                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c09} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            野口 一希<br/>
                                            <span style={{'font-size': '0.5em'}}>NOGUCHI KAZUKI</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            ヴェルディレスチJr.ユース<br/>都立駒場高等学校<br/>学習院大学フットサル（東京都3部）
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2018〜現在 エスブランコ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                        <hr/>


                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c11} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            藪田 修平<br/>
                                            <span style={{'font-size': '0.5em'}}>YABUTA SHUHEI</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            交野FC(大阪府)<br/>
                                            四條畷FC(大阪府)<br/>
                                            久御山高校サッカー部(京都府)<br/>
                                            関西外国語大学サッカー部<br/>
                                            大阪府トレセン<br/>
                                            インターハイ京都府代表<br/>
                                            近畿大会 第3位
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2018〜現在 エスブランコ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <hr/>

                        <div className="col-3">
                            <table className="small">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img src={c12} alt="コーチ" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>氏名</td>
                                        <td>
                                            吉田 俊太<br/>
                                            <span style={{'font-size': '0.5em'}}>YOSHIDA SHUNTA</span><br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>役職</td>
                                        <td>コーチ</td>
                                    </tr>
                                    <tr>
                                        <td>選手歴</td>
                                        <td>
                                            大阪セントラルFC（大阪府）<br/>
                                            友渕中学校（大阪府）<br/>
                                            桃山学院高校サッカー部（大阪府）<br/>
                                            大阪市トレセン<br/>
                                            インターハイ京都府代表<br/>
                                            近畿大会 第3位<br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>指導歴</td>
                                        <td>2007〜2010 ピュアFC(大阪府)<br/>2013〜現在 エスブランコ</td>
                                    </tr>
                                </tbody>
                            </table>
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
