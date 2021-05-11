import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import loadable from '@loadable/component'
import Seo from "../components/SEO"


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
            <Seo
                title="Schedule"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Schedule</h2>
                            <p>活動予定表</p>
                        </header>
                    </div>
                </section>
            </div>
            <CalComponent />
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
