import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

const MapPage = ({
    data: {
        site
    },

}) => {
    return (
        <Layout>
            <Seo
                title="Map"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Map</h2>
                            <p>活動場所</p>
                        </header>

                        <h4>活動曜日</h4>
                        <p>
                            月曜、木曜、土曜、日曜、祝日
                        </p>

                        <div className="grid-wrapper">
                            <div className="col-4">
                                <h4>江戸川区立中小岩小学校</h4>
                                <p>
                                    東京都江戸川区北小岩3-12-22<br/>
                                    ＪＲ総武線小岩駅下車北口より徒歩13分<br/>
                                    <a className="fa fa-map-marker" href="https://goo.gl/maps/Q4bhvbUoTxiHQxBW6" target="_blank" rel="noopener noreferrer"> Google Mapで開く</a><br/>
                                </p>
                            </div>
                            <div className="col-4">
                                <h4>江戸川区立東小岩小学校</h4>
                                <p>
                                    東京都江戸川区東小岩4-12-1<br/>
                                    ＪＲ総武線小岩駅下車北口より徒歩11分<br/>
                                    <a className="fa fa-map-marker" href="https://goo.gl/maps/Rqg1F1HfCahasFaa9" target="_blank" rel="noopener noreferrer">Google Mapで開く</a><br/>
                                </p>
                            </div>
                            <div className="col-4">
                                <h4>江戸川区立小岩第一中学校</h4>
                                <p>
                                    東京都江戸川区東小岩3-10-8<br/>
                                    ＪＲ総武線小岩駅下車北口より徒歩16分<br/>
                                    <a className="fa fa-map-marker" href="https://goo.gl/maps/H6aUdFvNz7xXsUNg7" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
                                </p>
                            </div>
                            <div className="col-4">
                                <h4>江戸川区立南小岩第二小学校</h4>
                                <p>
                                    東京都江戸川区南小岩2-16-1<br/>
                                    ＪＲ総武線小岩駅下車北口より徒歩15分<br/>
                                    <a className="fa fa-map-marker" href="https://goo.gl/maps/Cu43vwKkNmietGNz5" target="_blank" rel="noopener noreferrer">Google Mapで開く</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
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

