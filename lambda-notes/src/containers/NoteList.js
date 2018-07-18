import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'
import NoteCard from '../components/NoteCard'
import Loading from '../components/Loading'

class NoteList extends Component {
  componentDidMount () {
    this.props.fetchNotes()
  }

  render () {
    return (
      <div className='noteList'>
        <h1 className='noteList-header'>your Notes:</h1>
        <div className='noteList-container'>
          {this.props.api.fetching ? (
            <Loading />
          ) : (
            <div className='notes'>
              {this.props.notes.map((note) => {
                return <NoteCard note={note} key={note._id} />
              })}
            </div>
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
