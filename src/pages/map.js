import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

//import logo from '../images/logo.png'

import pic03 from '../images/map.jpg'
// import Iframe from 'react-iframe'

import ichu from '../images/koiwa1chu.jpg'
import nishikoiwa from '../images/nisjikoiwashou.jpg'
import koiwasyou from '../images/koiwasyou.jpg'


const MapPage = ({
    data: {
        site
    },

}) => {
    return (
        <Layout>
            <Seo title="活動場所"  image={`${pic03}` } />

            <section id="banner" className="style7" style={{backgroundImage: `url(${pic03})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Map</h2>
                        <p>活動場所</p>
                    </header>
                </div>
            </section>
            
            <div id="main">
                <div className="inner">
                    <h4>活動場所について</h4>
                    <p>
                        FC Esblancoの活動場所は、小岩地区の学校施設及び篠崎グラウンドで活動してます。
                    </p>
                    <hr/>
                    
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <h4>江戸川区立中小岩小学校</h4>
                            <p>
                                東京都江戸川区北小岩3-12-22<br/>
                                ＪＲ総武線小岩駅下車北口より徒歩13分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/Q4bhvbUoTxiHQxBW6" target="_blank" rel="noopener noreferrer"> Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>江戸川区立東小岩小学校</h4>
                            <p>
                                東京都江戸川区東小岩4-12-1<br/>
                                ＪＲ総武線小岩駅下車南口より徒歩11分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/Rqg1F1HfCahasFaa9" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>江戸川区立小岩第一中学校</h4>
                            <img className="image fit" src={ichu} alt="江戸川区立小岩第一中学校" />
                            <p>
                                東京都江戸川区東小岩3-10-8<br/>
                                ＪＲ総武線小岩駅下車南口より徒歩16分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/H6aUdFvNz7xXsUNg7" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>江戸川区立南小岩第二小学校</h4>
                            <p>
                                東京都江戸川区南小岩2-16-1<br/>
                                ＪＲ総武線小岩駅下車南口より徒歩15分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/Cu43vwKkNmietGNz5" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>篠崎グラウンド・サッカー場</h4>
                            <p>
                                東京都江戸川区篠崎町２丁目 東先<br/>
                                ＪＲ総武線小岩駅下車南口から「京成バス（小72 篠崎線）「浅間神社」から徒歩<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/rJ6xTzu74vxuTD9G9" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>

                        <div className="col-4">
                            <h4>東京シューレ江戸川小学校</h4>
                            <p>
                                東京都江戸川区西小岩２丁目４−１<br/>
                                ＪＲ総武線小岩駅下車北口から徒歩11分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/QSsEzLkfTzbzZtgm9" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>

                        <div className="col-4">
                            <h4>江戸川区立鹿骨小学校</h4>
                            <p>
                                東京都江戸川区鹿骨６丁目３−５<br/>
                                ＪＲ総武線小岩駅下車南口から「小７６：小岩駅～葛西駅行「松本小学校」から徒歩<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/ax1sxupqj99E72Fr6" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>

                        <div className="col-4">
                            <h4>江戸川区立西小岩小学校</h4>
                            <img className="image fit" src={nishikoiwa} alt="江戸川区立西小岩小学校" />
                            <p>
                                東京都江戸川区西小岩3丁目19-12<br/>
                                ＪＲ総武線小岩駅下車北口から徒歩7分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/QpAFx31xHnmmNXw37" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>

                        <div className="col-4">
                            <h4>江戸川区立小岩小学校</h4>
                            <img className="image fit" src={koiwasyou} alt="江戸川区立小岩小学校" />
                            <p>
                                東京都江戸川区東小岩3丁目20-10<br/>
                                ＪＲ総武線小岩駅下車南口から徒歩15分<br/>
                                京成電鉄「江戸川駅」下車徒歩10分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/3jWqKVEeq5ZQcat8A" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MapPage
export const MapPageQuery = graphql`
  query MapPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

