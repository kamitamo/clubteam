import React from "react"
import { useLocation } from "@reach/router"
import { Link, graphql } from "gatsby"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout"

import Share from "../components/ShareContainer"

export default function Template({ data }) {
    let location = useLocation()
    const { markdownRemark: { frontmatter, html } } = data // Object destructuring
    let featuredImgFluid = getImage(frontmatter.featuredImage)
    let featuredImgFluidAlt = frontmatter.featuredImageAlt
    let description = frontmatter.description

    return (
        <Layout>
            <Seo title={frontmatter.title} />
            <div id="main">
                <section id="one">
                    <div className="inner">
                        {description && (
                            <div >
                                {description}
                            </div>
                        )}


                        {/* If featured image is present, render featured image */}
                        {featuredImgFluid && (
                            <div className="blog-post">
                                <GatsbyImage image={featuredImgFluid} alt={featuredImgFluidAlt}/>
                            </div>
                        )}
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />

                        {/* If there are tags for the post, render this section */}
                        {frontmatter.tags && (
                            <>
                                <hr />
                                <ul>
                                    {frontmatter.tags.map((tagName, index) => {
                                        return (
                                            <li key={index} >
                                                <Link className="fa fa-futbol-o" to={`/tags/${tagName}`}  > 
                                                    {tagName}
                                                 </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        )}
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
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`
