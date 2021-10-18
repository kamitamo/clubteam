import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"

//import AdContainer from "../components/AdContainer"
import AdIcon from '../components/adIcon'
import AdText from '../components/adText'
import {adItems} from '../components/ad-items'



import Share from "../components/ShareContainer"
import Iframe from 'react-iframe'

export default function Template({ data }) {
    let location = useLocation()

    const { markdownRemark: { frontmatter, html } } = data
//    let featuredImgFluid = getImage(frontmatter.featuredImage)
//    let featuredImgFluidAlt = frontmatter.featuredImageAlt
    let description = frontmatter.description
    let cat = frontmatter.category

    return (
        <Layout>
            <Seo title={`${frontmatter.title} ${description}`} image={`${frontmatter.featuredImage.publicURL}`} />
            
            <div id="main" className="alt">
                <div className="inner">
                    <header className="major">
                        <h2>
                            {frontmatter.date} {frontmatter.title}
                        </h2>
                        <p>
                            {description}
                        </p>
                        

                    </header>

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <img className="image fit" src={`${frontmatter.featuredImage.publicURL}`} alt={`${frontmatter.title} ${description}`}/>
                            <div dangerouslySetInnerHTML={{ __html: html }} />

                            <Iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=gift_certificates&banner=1SYCAVH40V67ZW41NT02&f=ifr&linkID=fe4ba2afa3b714f230788d49bf3d8a6d&t=esb0c-22&tracking_id=esb0c-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" frameborder="0" />

                            <hr className="major" />


                        </div>
                        
                        <div className="col-6">
                            <h4>関連記事</h4>

                            <table className="small">
                                <thead></thead>
                                    <tbody>
                                        { data.relatedPosts.nodes.map(x => (
                                        <tr>
                                            <td>
                                                <Link to={x.frontmatter.path}>
                                                    <img className="image left" alt={x.frontmatter.date} src={ x.frontmatter.featuredImage.publicURL } />
                                                    {x.frontmatter.date} <br/> {x.frontmatter.title} {x.frontmatter.description}
                                                </Link>
                                            </td>
                                        </tr>
                                        ))}
                                        { adItems.map((item, index) => (
                                            <tr>
                                                <td>
                                                    <AdIcon adUrl={item.Url} adImgUrl={item.ImgUrl} text={item.Text}/>
                                                    <AdText adUrl={item.Url} title={item.Title} text={item.Text}/>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>





                                {/*
                            <ul className="actions">
                                {data.relatedPosts.nodes.map(x => (
                                    <li>
                                        <hr/>
                                        <Link to={x.frontmatter.path} className="Link primary">
                                            <p><span className="image left">
                                                   <img alt={x.frontmatter.date} src={ x.frontmatter.featuredImage.publicURL } />
                                               </span>
                                                {x.frontmatter.date} <br/> {x.frontmatter.title} {x.frontmatter.description}
                                            </p>
                                        </Link>
                                    </li>
                                ))}

                            <hr/>
                                <AdContainer />

                            </ul>
                                    */}
                        </div>
                    </div>
                    
                    <section id="two">
                        <h4>この記事をシェアする</h4>
                        <Share facebook twitter LINE href={location.href} />
                    </section>
                    
                    <hr />
                    <section id="one">
                        <h4>タグ一覧</h4>

                        <div className="TagArea">
                            {/* If there are tags for the post, render this section */}
                            {frontmatter.tags && (
                                <ul className="actions horizontal">
                                    {frontmatter.tags.map((tagName, index) => {
                                        return (
                                            <li key={index} >
                                                <Link to={`/tags/${tagName}`} className="button rounded small icon fa-hashtag">
                                                    {tagName}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                    <li>
                                        <Link to={`/category/${cat}`} className="button rounded small icon fa-hashtag">{cat}
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </section>

                </div>
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`
  query BlogPostBySlug($path: String!, $relatedFileAbsolutePaths: [String!]!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        tags
        category
        description
        author
        featuredImageAlt
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    relatedPosts: allMarkdownRemark(
      filter: { 
        fileAbsolutePath: { in: $relatedFileAbsolutePaths }
        frontmatter: { category: {regex: "/2021年度/" }}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          path
          title
          tags
          category
          description
          author
          featuredImageAlt
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
}
`
