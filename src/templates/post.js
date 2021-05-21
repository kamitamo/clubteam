import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"

import Share from "../components/ShareContainer"


export default function Template({ data }) {
    let location = useLocation()
    const { markdownRemark: { frontmatter, html } } = data
//    let featuredImgFluid = getImage(frontmatter.featuredImage)
//    let featuredImgFluidAlt = frontmatter.featuredImageAlt
    let description = frontmatter.description

    return (
        <Layout>
            <Seo title={frontmatter.title} />
            
            <section id="banner" style={{backgroundImage:  `url(${frontmatter.featuredImage.publicURL})` }}>
                <div className="inner">
                    <header className="major">
                        <h2>
                            {frontmatter.date} {frontmatter.title}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </header>
                </div>
            </section>

            <div id="main">
                <section id="one">
                    <div className="inner">

                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        
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

                        <hr />
                        <Share facebook twitter LINE href={location.href} />

                    </div>
                </section>
            </div>
        </Layout>
    )
}
export const pageQuery = graphql`query ($path: String!) {
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
}
`
