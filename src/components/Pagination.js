import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ numPages, currentPage, pathBase } ) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const pageLimit = 3
    const omitFirst = currentPage - 1 > pageLimit
    const omitLast = numPages - currentPage > pageLimit
    const prevPage =
          currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
    const nextPage = pathBase + (currentPage + 1).toString()

    const prevText = 'Prev'
    const nextText = 'Next'
    const paginationTag =
          numPages !== 1 ? (
              <ul className="pagination">
                  <li>
                      {!isFirst ? (
                          <Link to={prevPage} rel="prev" className="button small">
                              {prevText}
                          </Link>
                      ) : (
                          <span className="button small disabled">{prevText}</span>
                      )}
                  </li>
                  {
                      /*FirstPage*/
                      !isFirst && (
                          <li>
                              <Link to={pathBase} className="page" >1</Link>
                              {omitFirst && <span>&hellip;</span>}
                          </li>
                      )
                  }
                  {Array.from({ length: numPages }, (_, i) =>
                      i + 1 === currentPage ? (
                          <li key={`pagination-number${i + 1}`} >
                              <span className="page active">{i + 1}</span>
                          </li>
                      ) : (
                          i > 0 &&
                              i < numPages - 1 &&
                              currentPage - pageLimit < i + 1 &&
                              i + 1 < currentPage + pageLimit && (
                                  <li
                                      key={`pagination-number${i + 1}`}
                                  >
                                      <Link to={pathBase + (i === 0 ? '' : i + 1)} className="page">{i + 1}</Link>
                                  </li>
                              )
                      )
                  )}
                  {
                      /*LastPage*/
                      !isLast && (
                          <li >
                              {omitLast && <span>&hellip;</span> }
                              <Link to={pathBase + numPages} className="page">{numPages}</Link>
                          </li>
                  )
                  }


                  {!isLast ? (
                      <li>
                          <Link to={nextPage} rel="next" className="button small">
                              {nextText}
                          </Link>
                      </li>
                  ) : (
                      <span className="button small disabled">{nextText}</span>
                  )}

              </ul>
          ) : null

    return paginationTag
}

export default Pagination

Pagination.propTypes = {
    numPages: PropTypes.number,
    currentPage: PropTypes.number,
    pathBase: PropTypes.string,
}

