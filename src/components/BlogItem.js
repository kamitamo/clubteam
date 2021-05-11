import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const BlogItem = ({ index, nodeObj }) => {
  const {
      frontmatter: { title, date, path, description,  },
  } = nodeObj

    return (
        <article key={index} >

            {description && (
                <h4>
                    <Link to={path}>{title} {description}</Link>
                </h4>
            )}

            {date && (
                <div>
                    <p className="fa fa-calendar">{date}</p>
                </div>
            )}

        </article>
    )
}

BlogItem.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

export default BlogItem
