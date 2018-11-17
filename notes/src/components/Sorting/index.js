import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { alpha, alphaReverse, sortById } from '../../actions';

import './sorting.css';

class Sorting extends React.Component {
  render () {
    return (
      <section className='sorting-container'>
        <p>Sort:</p>
        <select>
          <option></option>
          <option onClick={this.props.alpha}>A-Z</option>
          <option onClick={this.props.alphaReverse}>Z-A</option>
          <option onClick={this.props.sortById}>By Id</option>
        </select>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return {notes: state.notesReducer.notes}
}

export default connect(mapStateToProps, { alpha, alphaReverse, sortById })(Sorting);
