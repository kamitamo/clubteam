import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"

import Share from "../components/ShareContainer"
//import Ads from '../components/Ads'
import AS1 from '../components/AS1'
//import AS2 from '../components/AS2'
//import AS3 from '../components/AS3'
import AS4 from '../components/AS4'
import AS5 from '../components/AS5'
//import Iframe from 'react-iframe'

export default function Template({ data }) {
    let location = useLocation()

    const { markdownRemark: { frontmatter, html } } = data
//    let featuredImgFluid = getImage(frontmatter.featuredImage)
//    let featuredImgFluidAlt = frontmatter.featuredImageAlt
    let description = frontmatter.description

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

                            <AS5 />

                            <hr className="major" />


                        </div>
                        
                        <div className="col-6">
                            <h4>関連記事</h4>
                            <ul className="actions">
                                
                                <AS4 />
                                
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
                                <AS1 />

                            </ul>
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
      limit: 3
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
