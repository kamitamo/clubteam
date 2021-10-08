import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import Seo from "../components/SEO"
import logo from '../images/logo.png'


const PrivacyPolicyPage = ({
    data: {
        site
    },
}) => {
    return (
        <Layout>

            <Seo title="プライバシー"  image={`${logo}`} />

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Privacy Policy</h2>
                        <p>プライバシーポリシー</p>
                    </header>
                </div>
            </section>

            <div id="main">
                <div className="inner">
                    <div className="col-6">
                        <ol>
                            <li>FCエスブランコ（以下、「当会」という）が保有する各団員及び保護者の個人情報は、当団が定める個人情報保護方針に準じて適正に管理し、個人情報の漏えい防止に努めます。</li>
                            <li>当会は、運営・管理（健康管理を含む）に関する業務を実施するために、会員及びその保護者に関する個人情報を取得し、利用します。</li>
                            <li>当会の会員及びその保護者に関する個人情報は、運営・管理に関し、当会が一定の水準に達していると認める第三者（専門の業者）に委託する場合があります。</li>
                            <li>当会の会員の個人情報は、本人確認の後、速やかに開示します。</li>
                            <li>当会は、退会した会員及びその保護者の個人情報を退会年度の年度末（3月31日）まで保管したのち、所定の方法で破棄します。</li>
                            <li>当会は、会員の個人情報に関する相談・苦情については、下記の苦情相談窓口責任者を窓口とします。</li>
                            <li>当会は、運営・管理上の一切に関わる業務に必要な会員に関する個人情報を取得し、利用します。<br/>（例）入会申込書、ホームページ、SNS、メール等</li>
                        </ol>
                        <p>
                            個人情報保護管理責任者および個人情報の苦情相談窓口責任者<br/>
                            FCエスブランコ<br/>
                            代表　篠原 和之<br/>
                            info@fc-esblanco.com<br/>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPolicyPage
export const PrivacyPolicyPageQuery = graphql`
  query PrivacyPolicyPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
