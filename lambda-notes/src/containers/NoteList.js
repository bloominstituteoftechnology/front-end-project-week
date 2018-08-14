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
    const { search } = this.props
    const filteredNotes = this.props.notes.filter((note) => {
      return (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.textBody.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.tags.join('').toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })

    return (
      <div className='noteList'>
        <div className='padding-container'>
          <div className='notelist-header-div'>
            <div className='note-header'>Your Notes:</div>
            <input
              placeholder='Search Note'
              className='search-input'
              type='search'
              value={this.props.search}
              onChange={this.props.handleChange}
            />
            <div className='clear-Btn' onClick={this.props.handleClear}>
              Clear
            </div>
          </div>
          {this.props.api.fetching ? (
            <Loading />
          ) : (
            <div className='notes'>
              {filteredNotes.map((note, index) => {
                return (
                  <NoteCard
                    key={note._id}
                    note={note}
                    index={index}
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
