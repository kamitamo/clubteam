import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const BlogItem = ({ index, nodeObj }) => {
  const {
      frontmatter: { title, date, path, description,  },
  } = nodeObj

    return (
        <article key={index} >

            <div>
                <Link to={path}>
                    {date} {title} {description}
                </Link>
            </div>
            <hr/>
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
