import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ListNotes.css'

class ListNotes extends Component {
  render (props) {
    console.log('*****', this.props.notes)
    return (
      <div className='ListNotes'>
        <h2 className='list_h2'>Your Notes:</h2>
        <div className='notes'>
          {this.props.notes.map(note =>
            <div className='card-body' key={note.noteId}>
              <h4 className='card-title'>
                <Link className='card-link' to={`/view/${note.noteId}`}>
                  {note.title}
                </Link>
              </h4>
              <span className='card-text'>
                {note.content}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ListNotes
