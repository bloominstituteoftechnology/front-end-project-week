import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNote, deleteNote } from '../actions'

class NoteDetails extends Component {
  componentDidMount () {
    this.props.getNote(this.props.match.params.id)
  }
  handleClick = () => {
    this.props.deleteNote(this.props.match.params.id)
    this.props.history.push('/')
  }

  render () {
    const note = this.props.note
    console.log('IN RENDER DDEA', note)
    return (
      <div className='noteDetails-container'>
        <div className='noteDetails'>
          <div className='edit-btns'>
            <div className='edit-btn'>Edit</div>
            <div className='edit-btn' onClick={this.handleClick}>
              Delete
            </div>
          </div>
          <h1>{note.title}</h1>
          <p>{note.textBody}</p>
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
export default connect(mapStateToProps, { getNote, deleteNote })(NoteDetails)
