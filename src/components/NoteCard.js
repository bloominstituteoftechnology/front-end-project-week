import React from 'react'
import { getNote } from '../actions'
import { connect } from 'react-redux'
import Markdown from 'markdown-to-jsx'

const NoteCard = (props) => {
  const note = props.note
  console.log('IN NOTE CARD', note)
  const handleDetails = () => {
    props.getNote(note.id, () => {
      props.history.push(`/notes/${note.id}`)
    })
  }
  return (
    <div key={note.id} className='myLink' onClick={() => handleDetails()}>
      <div className='cardTitle'>
        {note.title.length > 15 ? (
          note.title.substr(0, 14) + ' ...'
        ) : (
          note.title
        )}
      </div>
      <div className='cardBody'>
        <Markdown>
          {note.context.length > 100 ? (
            note.context.substr(0, 99) + ' ...'
          ) : (
            note.context
          )}
        </Markdown>
      </div>
      <div className='card-tags'>
        <div className=''>
          {note.tags.map((tag, index) => {
            console.log(note.tags)
            return (
              <div className='fas fa-tags' key={tag + index}>
                {' '}
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
