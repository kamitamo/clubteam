import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import Seo from "../components/SEO"
//import BlogItem from "../components/BlogItem"

import pic01 from '../images/about.jpg'
import pic02 from '../images/coach.jpg'
import pic03 from '../images/map.jpg'
import pic04 from '../images/schedule.jpg'
import pic05 from '../images/join.jpg'
import pic06 from '../images/result.jpg'
import pic07 from '../images/archive.jpg'
import pic08 from '../images/20210508hashiri4.jpg'

//import logo from '../images/logo.png'
import bg from '../images/bg.jpg'


const HomePage = ({ data }) => {
    const { BlogPostQuery } = data

    return (
        <Layout>
            <Seo image={`${bg}`} />
            <Banner/>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <p>お知らせ</p>
                        </header>
                        <ul className="actions">
                            <li><Link to="/journal"><u>09/30-10/01の試合結果</u>を更新しました</Link></li><br/>
                            <li><Link to="/journal"><u>09/24の試合結果</u>を更新しました</Link></li><br/>
                            <li><Link to="/journal"><u>09/18の試合結果</u>を更新しました</Link></li><br/>
                        </ul>
                    </div>
                </section>

                <section id="two" className="tiles">
                    <article style={{backgroundImage: `url(${pic01})`}}>
                        <header className="major">
                            <h3>About</h3>
                            <p>クラブについて</p>
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
                    <article style={{backgroundImage: `url(${pic07})`}}>
                        <header className="major">
                            <h3>Archive</h3>
                            <p>過去の結果</p>
                        </header>
                        <Link to="/archive" className="link primary"></Link>
                    </article>
                    <article style={{backgroundImage: `url(${pic08})`}}>
                        <header className="major">
                            <h3>Event</h3>
                            <p>走りの学校 × FC Esblanco</p>
                        </header>
                        <Link to="/走りの学校1" className="link primary"></Link>
                    </article>
                </section>

                <section id="three">
                    <div className="inner">
                        <header className="major">
                            <p>タグ一覧</p>
                        </header>
                        <ul style={{'listStyleType':'none'}} className="actions horizontal">
                            {BlogPostQuery.group.map(tag => (
                                <li style={{'margin-bottom':'10px'}} key={tag.fieldValue}>
                                    <Link className="button rounded small icon fa-hashtag" to={`/tags/${tag.fieldValue}`} >
                                        {tag.fieldValue} ({tag.totalCount})
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                
                
            </div>
            
        </Layout>
    )
}

export default HomePage

export const query = graphql`
  {
    BlogPostQuery: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            regex: "/2023年度/"
          }
        }
      }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
