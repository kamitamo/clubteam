import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"

import auth from '../images/auth.jpg'
import docs from '../pdf/kyubu_fukubu_taibu.pdf'


import loadable from '@loadable/component'

const OtherComponent = loadable(() => import('../components/CalendarFull.js'))
function CalComponent() {
  return (
      <OtherComponent />
  )
}


const AuthorizedPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="関係者用" />

            <section id="banner" className="style7" style={{backgroundImage: `url(${auth})`}}>
                <div className="inner">
                    <header className="major">
                        <h2>Authorized page</h2>
                        <p>関係者用</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">
                    <h3>ドキュメント</h3>
                    <span>
                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        <a href={docs} title="休部・復部・退部届" target="_blank" rel="noopener noreferrer">
                            休部・復部・退部届
                        </a>
                    </span>
                    <hr/>
                    <h3>活動予表表</h3>
                    <span>関係者用ページでは、選択したイベントの詳細が確認できます</span>
                    <CalComponent  />
                </div>
            </div>
        </Layout>
    )
}

export default AuthorizedPage
export const pageQuery = graphql`
  query pageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
