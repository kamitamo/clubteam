import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Seo from "../components/SEO"


const LinkPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>
            <Seo title="リンク" />

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Link</h2>
                        <p>リンク</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">

                    <ul style={{'listStyleType':'none'}} className="actions vertical">
                        <li>
                            <a className="fa fa-link" href="http://edogawa-fa.jp/" title="江戸川区サッカー連盟" target="_blank" rel="noopener noreferrer">江戸川区サッカー連盟<i aria-hidden="true"></i></a><br />
                        </li>
                        <li>
                            <a className="fa fa-link" href="http://site-1769406-4499-6537.strikingly.com/" title="東部リーグ" target="_blank" rel="noopener noreferrer">東部リーグ</a><br />
                        </li>
                        <li>
                            <a className="fa fa-link" href="http://www.tokyo-2bloc.jp/" title="東京都第2ブロック" target="_blank" rel="noopener noreferrer">東京都第2ブロック</a><br />
                        </li>
                        <li>
                            <a className="fa fa-link" href="http://www.u12tfa.jp/" title="東京都少年サッカー連盟" target="_blank" rel="noopener noreferrer">東京都少年サッカー連盟</a><br />
                        </li>
                        <li>
                            <a className="fa fa-link"  href="https://jfaid.jfa.jp/uniid-server/login" title="KickOff（JFA Web 登録サイト）" target="_blank" rel="noopener noreferrer">KickOff（JFA Web 登録サイト）</a><br />
                        </li>
                        <li>
                            <a className="fa fa-link" href="http://www.forza.tokyo/" title="フォルツァリーグ" target="_blank" rel="noopener noreferrer">フォルツァリーグ</a><br />
                        </li>

                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default LinkPage
export const LinkPageQuery = graphql`
  query LinkPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
