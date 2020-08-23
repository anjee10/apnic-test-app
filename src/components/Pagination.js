import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Pagination extends Component {
  render() {
    const totalPages = new Array(this.props.totalPages)
    const activePage = this.props.activePage

    // TODO: improve this code
    const pages = []
    for (let i = 0; i < totalPages.length; i++) {
      pages.push(i)
    }

    return (
      <div className="pagination">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => this.props.handlePaginationClick(page)}
            className={activePage === page ? "active" : null}
          >
            {page + 1}
          </button>
        ))}
      </div>
    )
  }
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  activePage: PropTypes.number,
  handlePaginationClick: PropTypes.func,
}
