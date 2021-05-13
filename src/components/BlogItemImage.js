import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const BlogItemImage = ({ index, nodeObj }) => {
  const {
      frontmatter: { title, date, path, description, featuredImageAlt, featuredImage },
  } = nodeObj

  const image = getImage(featuredImage)

    return (

        <article key={index} >
            <div className="box alt">

            {image && (
                <Link to={path}>
                    <GatsbyImage image={image} alt={featuredImageAlt} />
                </Link>
            )}
            {description && (
                <Link to={path}>
                {description}
                </Link>
            )}
            <br/>
            {date && (
                <small><i className="fa fa-clock-o"></i>{date} {title} </small>
            )}
            </div>
            <hr/>

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
