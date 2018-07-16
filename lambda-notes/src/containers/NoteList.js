import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

class NoteList extends Component {
  componentDidMount () {
    this.props.fetchNotes()
  }

  render () {
    return <div>hello</div>
  }
}
const mapStateToProps = (state) => {
  console.log('in map state', state)
  return {
    notes: state.notes
  }
}
export default connect(mapStateToProps, { fetchNotes })(NoteList)
