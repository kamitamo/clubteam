import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import pic03 from '../images/map.jpg'

const MapPage = ({
    data: {
        site
    },

}) => {
    return (
        <Layout>
            <Seo title="Map"  />

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
                        　FC Esblancoでは、月・木曜に、学校の校庭で夜練、ESP（Esblanco Soccer Park）を実施してます。（ただし校庭利用不可の場合は中止の場合あり）<br/>
                        <br/>
                        　土・日曜及び祝日は、学校の校庭または遠征で、練習やトレーニングマッチがあります。<br/>
                        <br/>
                        詳しくは、<a href="/schedule">活動予定表</a>も合わせてご確認ください。
                        
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
                                ＪＲ総武線小岩駅下車北口より徒歩11分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/Rqg1F1HfCahasFaa9" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>江戸川区立小岩第一中学校</h4>
                            <p>
                                東京都江戸川区東小岩3-10-8<br/>
                                ＪＲ総武線小岩駅下車北口より徒歩16分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/H6aUdFvNz7xXsUNg7" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
                            </p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h4>江戸川区立南小岩第二小学校</h4>
                            <p>
                                東京都江戸川区南小岩2-16-1<br/>
                                ＪＲ総武線小岩駅下車北口より徒歩15分<br/>
                                <a className="fa fa-map-marker" href="https://goo.gl/maps/Cu43vwKkNmietGNz5" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
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

