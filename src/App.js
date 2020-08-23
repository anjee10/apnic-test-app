import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageData from './components/PageData'
import { handlePaginationClick } from './actions'
import './App.css'
import './Pagination.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <PageData {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  handlePaginationClick: (currentInput) => dispatch(handlePaginationClick(currentInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(hot(App))
