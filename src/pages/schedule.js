import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import loadable from '@loadable/component'
import Seo from "../components/SEO"

//import logo from '../images/logo.png'
import pic04 from '../images/schedule.jpg'

//import Iframe from 'react-iframe'

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
                    <CalComponent  />

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
