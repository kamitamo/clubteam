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
                        <h2>Member page</h2>
                        <p>関係者用</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">
                    <div className="content">
                        <h3>このページは？</h3>
                        <p>
                            このページは、FC Esblancoに入部した保護者や選手、関係者だけが閲覧できるページです。<br/>
                        <br/>
                        活動予定表からイベントの詳細の確認、各種ドキュメントなどをダウンロードできます。<br/>
                        </p>
                        <ul className="actions">
                            <li><a href={docs} className="button special rounded fit icon fa-file-pdf-o" target="_blank" rel="noopener noreferrer">休部・復部・退部届</a></li>
                        </ul>
                    </div>
                    <hr/>
                    <h3>活動予表表（関係者用）</h3>
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
