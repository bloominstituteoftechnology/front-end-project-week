import React from 'react'
import { getNote } from '../actions'
import { connect } from 'react-redux'
const NoteCard = (props) => {
  const note = props.note
  const handleDetails = () => {
    props.getNote(note._id)
    props.history.push(`/notes/${note._id}`)
  }
  return (
    // <Link key={note._id} className='myLink' to={`/notes/${note._id}`}>
    <div key={note._id} className='myLink' onClick={() => handleDetails()}>
      <h1 className='cardTitle'>
        {note.title.length > 8 ? note.title.substr(0, 9) + ' ...' : note.title}
      </h1>
      <div className='cardBody'>
        {note.textBody.length > 200 ? (
          note.textBody.substr(0, 199) + ' ...'
        ) : (
          note.textBody
        )}
      </div>
      <div className='card-tags'>
        <div className='fas fa-tag card-tags'>
          {note.tags.map((tag, index) => {
            return (
              <div className='card-tag' key={tag + index}>
                {tag}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default connect(null, { getNote })(NoteCard)
