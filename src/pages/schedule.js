import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import loadable from '@loadable/component'
import Seo from "../components/SEO"

//import logo from '../images/logo.png'
import pic04 from '../images/schedule.jpg'

import Iframe from 'react-iframe'

const OtherComponent = loadable(() => import('../components/Calendar.js'))
function CalComponent() {
  return (
      <OtherComponent />
  )
}


const SchedulePage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="活動予定表"  image={`${pic04}`} />

            <section id="banner" className="style7" style={{backgroundImage: `url(${pic04})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Schedule</h2>
                        <p>活動予定表</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <section id="one">

                    <center>
                        <Iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=294&l=ur1&category=smp&banner=0C1ZBTBCEGCKBE5YWMR2&f=ifr&linkID=47ecdfb6adc9e8925ed2917a804c96ae&t=esb0c-22&tracking_id=esb0c-22" width="320" height="100" scrolling="no" border="0" marginwidth="0" frameborder="0" />
                    </center>

                    <CalComponent  />
                    <center>
                        <Iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=smp&banner=0CVRXQ0Q4NGWJP35WB82&f=ifr&linkID=f678632f05717c93583ccf68f3573386&t=esb0c-22&tracking_id=esb0c-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" frameborder="0" />

                    </center>


                </section>



            </div>

        </Layout>
    )
}
export default SchedulePage
export const SchedulePageQuery = graphql`
  query SchedulePageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
