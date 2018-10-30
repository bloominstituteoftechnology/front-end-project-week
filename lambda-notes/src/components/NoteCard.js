import React from 'react';
import './NoteCard.css'

export const NoteCard = props => {
  const { title, textBody} = props
  return (
  <div className="NoteCard">
    <h1>
      {title}
    </h1>
    <p>
      {textBody}
    </p>
  </div>
  )
}