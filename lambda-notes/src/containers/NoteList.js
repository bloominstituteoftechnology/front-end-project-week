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
      // console.log(note)
      return (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.content.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.tags.join('').toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
    return (
      <div className='noteList'>
        <h1 className='noteList-header'>your Notes:</h1>
        <input
          type='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
        <div className='noteList-container'>
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
