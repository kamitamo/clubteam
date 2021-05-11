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
            <Seo
                title="Link"
            />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Link</h2>
                            <p>リンク</p>
                        </header>
                        <a href="http://edogawa-fa.jp/" title="江戸川区サッカー連盟" className="normal" target="_blank" rel="noopener noreferrer">江戸川区サッカー連盟<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        <a href="http://site-1769406-4499-6537.strikingly.com/" className="normal"  title="東部リーグ" target="_blank" rel="noopener noreferrer">東部リーグ<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        <a href="http://www.tokyo-2bloc.jp/" title="東京都第2ブロック" className="normal"  target="_blank" rel="noopener noreferrer">東京都第2ブロック<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        <a href="http://www.u12tfa.jp/" title="東京都少年サッカー連盟" className="normal"  target="_blank" rel="noopener noreferrer">東京都少年サッカー連盟<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        <a href="https://jfaid.jfa.jp/uniid-server/login" className="normal"  title="KickOff（JFA Web 登録サイト）" target="_blank" rel="noopener noreferrer">KickOff（JFA Web 登録サイト）<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        <a href="http://www.forza.tokyo/" className="normal" title="フォルツァリーグ" target="_blank" rel="noopener noreferrer">フォルツァリーグ<i className="fa fa-link" aria-hidden="true"></i></a><br /><br />
                        
                    </div>
                </section>
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
