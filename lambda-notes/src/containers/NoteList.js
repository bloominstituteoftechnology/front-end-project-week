import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'
import Loading from '../components/Loading'
import NoteCard from '../components/NoteCard'

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
              {this.props.notes.map((note, index) => {
                return (
                  <NoteCard
                    key={note._id}
                    note={note}
                    index={index}
                    moveCard={this.moveCard}
                    history={this.props.history}
                  />
                )
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
