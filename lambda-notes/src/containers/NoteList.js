import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'
import NoteCard from '../components/NoteCard'

class NoteList extends Component {
  componentDidMount () {
    this.props.fetchNotes()
  }

  render () {
    return (
      <div className='noteList-container'>
        <div className='noteList'>
          {this.props.api.fetching ? (
            <h1 className='loading'>Loading ....</h1>
          ) : (
            [
              <h1 className='noteList-header'>your Notes:</h1>,
              <br />,
              <div className='notes'>
                {this.props.notes.map((note) => {
                  return <NoteCard note={note} key={note._id} />
                })}
              </div>
            ]
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchNotes })(NoteList)
