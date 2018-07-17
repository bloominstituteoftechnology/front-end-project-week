import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNote } from '../actions'

class NoteDetails extends Component {
  componentDidMount () {
    this.props.getNote(this.props.match.params.id)
  }
  render () {
    const note = this.props.note.title
    console.log('IN RENDER DDEA', note)
    return (
      <div className='noteDetails-container'>
        <div className='noteDetails'>
          <div className='edit-btns'>
            <div className='edit-btn'>Edit</div>
            <div className='edit-btn'>Delete</div>
          </div>
          <h1>{note}</h1>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('in DETAILS STATE', state.note)
  return {
    note: state.note
  }
}
export default connect(mapStateToProps, { getNote })(NoteDetails)
