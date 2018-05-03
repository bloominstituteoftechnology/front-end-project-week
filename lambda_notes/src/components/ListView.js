import React, { Component } from 'react'
import './ListView.css'
import { Link } from 'react-router-dom'

class ListView extends Component {
  constructor (props) {
    // eslint-disable-line
    super(props)
  }
  render () {
    console.log('I am in ListView')
    return (
      <div className='NoteList'>
        <div className='headerBody'>
          <h1 className='HeaderText'>Your Notes:</h1>
        </div>
        <div className='Notes'>
          {this.props.notes.map(note =>
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
