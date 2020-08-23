import React, { Component } from 'react'
import { ReactSortable } from 'react-sortablejs'
import styled from 'styled-components'
import axios from 'axios'
import PropTypes from 'prop-types'
import Pagination from './Pagination'

const IMGDiv = styled.div`
	margin: 10px;
	display: inline-block;
`
const DetailsDiv = styled.div`
	margin: 10px;
	display: inline-block;
`

class PageData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: this.props.currentPage,
      pageCount: 0
    }
  }

	// receiving data from below endpoint in JSON format
  receivedData () {
    axios
      .get('https://academy.apnic.net/wp-json/academy/virtual-labs')
      .then(res => {
        const data = res.data.virtualLabs
        const offset = this.state.currentPage * this.state.perPage
        const slice = data.slice(offset, offset + this.state.perPage)
        const pageData =
					<ReactSortable
					  list={slice}
					  setList={newState => this.setState({ list: newState })}
					>
					  {slice.map((data, j) => (
					    <div key={j} className="listing">
					      <IMGDiv><img src={data.thumbnail} /></IMGDiv>
					      <IMGDiv>
									Duration: {data.durationMinutes} Minutes <br />
									Language: {data.language} <br />
					      </IMGDiv>
					      <DetailsDiv>
					        <div><strong>{data.name}</strong></div>
					        <div>{data.description}</div>
					      </DetailsDiv>
					    </div>
					  ))}
					</ReactSortable>

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          pageData
        })
      })
  }

	// first time rendering of component
  componentDidMount () {
    this.receivedData()
  }

	// updating state and re-render this component when use clicks on pagination
	componentDidUpdate (prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.setState({
        currentPage: this.props.currentPage
      })
      this.receivedData()
    }
  }

  render () {
    return (
      <div>
        {this.state.pageData}
        {this.state.pageCount
          ? <Pagination
            totalPages={this.state.pageCount}
            handlePaginationClick={this.props.handlePaginationClick}
            activePage={this.state.currentPage}
          />
          : null
        }
      </div>
    )
  }
}

PageData.propTypes = {
  currentPage: PropTypes.number,
  handlePaginationClick: PropTypes.func
}

PageData.defaultProps = {
  currentPage: 0
}

export default PageData
