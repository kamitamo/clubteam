import React from "react"
import { Link } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const BlogItemImage = ({ index, nodeObj }) => {
  const {
      frontmatter: { title, date, path, description, featuredImage },
  } = nodeObj


    return (

        <article key={index} style={{backgroundImage: `url(${featuredImage.publicURL})`}} >

            <div className="content">
                <div className="inner">
                    <header className="major">
                        <h3>{date} {title}</h3>
                        <p>{description}</p>
                    </header>
                    <ul className="actions">
                        <li><Link to={path} className="link primary"></Link></li>
                    </ul>
                </div>
            </div>

        </article>
    )
}

BlogItemImage.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default BlogItemImage
