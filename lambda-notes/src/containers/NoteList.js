import Markdown from 'markdown-to-jsx'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions'
import Loading from '../components/Loading'
import NoteCard from '../components/NoteCard'

class NoteList extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }
  componentDidMount () {
    this.props.fetchNotes()
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render () {
    const { search } = this.state
    const filteredNotes = this.props.notes.filter((note) => {
      if (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.textBody.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.tags.join('').toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) {
        return note
      }
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
              value={this.state.search}
              onChange={this.handleChange}
            />
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
