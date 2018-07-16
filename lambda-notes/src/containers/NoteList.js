import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'
import NoteCard from '../components/NoteCard'
import SideNav from '../components/SideNav'

class NoteList extends Component {
  componentDidMount () {
    this.props.fetchNotes()
  }

  render () {
    return (
      <div className='noteList-container'>
        <SideNav />
        <div className='noteList'>
          {this.props.api.fetching ? (
            <h1 className='loading'>Loading ....</h1>
          ) : (
            <div>
              <h2 className='yourNotes'>your Notes:</h2>
              <br />
              <div className='notes'>
                {this.props.notes.map((note) => {
                  return (
                    <NoteCard
                      title={note.title}
                      textBody={note.textBody}
                      id={note._id}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('in map state', state)
  return {
    notes: state.notes,
    api: state.api
  }
}
export default connect(mapStateToProps, { fetchNotes })(NoteList)
