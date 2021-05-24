import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import Seo from "../components/SEO"
import BlogItem from "../components/BlogItem"

import pic01 from '../images/esn80.jpg'
import pic02 from '../images/coach.jpg'
import pic03 from '../images/map.jpg'
import pic04 from '../images/schedule.jpg'
import pic05 from '../images/join.jpg'
import pic06 from '../images/result.jpg'



const HomePage = ({ data }) => {
    const { BlogPostQuery } = data

    return (
        <Layout>
            <Seo/>
            <Banner/>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h3>NEWS</h3>
                            <p>最新情報</p>
                        </header>
                            {BlogPostQuery.edges.map(({ node }, index) => (
                                <BlogItem nodeObj={node} key={index} />
                            ))}
                        <ul className="actions fit small">
                            <li>
                                <Link to="/journal" className="button special fit small">もっと見る</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id="two" className="tiles">
                    <article style={{backgroundImage: `url(${pic01})`}}>
                        <header className="major">
                            <h3>About</h3>
                            <p>クラブ概要</p>
                        </header>
                        <Link to="/about" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic02})`}}>
                        <header className="major">
                            <h3>Coach</h3>
                            <p>コーチ紹介</p>
                        </header>
                        <Link to="/coach" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic03})`}}>
                        <header className="major">
                            <h3>Map</h3>
                            <p>活動場所</p>
                        </header>
                        <Link to="/map" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic04})`}}>
                        <header className="major">
                            <h3>Schedule</h3>
                            <p>活動予定表</p>
                        </header>
                        <Link to="/schedule" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic05})`}}>
                        <header className="major">
                            <h3>Join</h3>
                            <p>入部について</p>
                        </header>
                        <Link to="/join" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic06})`}}>
                        <header className="major">
                            <h3>Result</h3>
                            <p>試合結果</p>
                        </header>
                        <Link to="/journal" className="link primary"></Link>
                    </article>
                </section>

            </div>
            
        </Layout>
    )
}

export default HomePage

export const query = graphql`
  {
    BlogPostQuery: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                )
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
