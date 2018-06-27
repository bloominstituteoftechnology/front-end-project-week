import React, { Component } from 'react'
import './ListView.css'
import { Link } from 'react-router-dom'

class ListView extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }

  updateSearch = e => {
    this.setState({ search: e.target.value })
  }
  render () {
    // console.log('I am in ListView')
    const filteredNotes = this.props.notes.filter(note => {
      return (
        note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        note.content.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      )
    })

    return (
      <div className='NoteList'>
        <input
          type='text'
          className='SearchBar'
          onChange={this.updateSearch}
          value={this.state.search}
        />

        <div className='headerBody'>
          <h1 className='HeaderText'>Your Notes:</h1>
        </div>
        <div className='Notes'>
          {filteredNotes.map(note =>
            <div className='Note' key={note._id}>
              <Link className='noteLink' to={`/ViewNote/${note._id}`}>
                <div className='noteTitle'>
                  {note.title}
                </div>
              </Link>
              <div className='noteContent'>
                {note.content}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default ListView
