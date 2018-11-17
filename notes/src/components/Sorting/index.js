import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { alpha, alphaReverse, sortById, search } from '../../actions';

import './sorting.css';

class Sorting extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }
  }
  inputHandler = (e) => {
    const search = e.target.value
    this.setState({searchTerm: search})

    return this.props.search(search)
  }
  render () {
    return (
      <section className='sorting-container'>
        <section className='search'>
          <p>Search</p>
          <input type='text' onChange={this.inputHandler} value={this.state.searchTerm} />
        </section>
        <section className='sorting'>
          <p>Sort:</p>
          <select>
            <option></option>
            <option onClick={this.props.alpha}>A-Z</option>
            <option onClick={this.props.alphaReverse}>Z-A</option>
            <option onClick={this.props.sortById}>By Id</option>
          </select>
        </section>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return {notes: state.notesReducer.notes}
}

export default connect(mapStateToProps, { alpha, alphaReverse, sortById, search })(Sorting);
