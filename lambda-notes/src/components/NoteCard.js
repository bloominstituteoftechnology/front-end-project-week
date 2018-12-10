import React from 'react';
import './NoteCard.css'

export const NoteCard = props => {
  const { title, content} = props
  return (
  <div className="NoteCard">
    <h1>
      {title}
    </h1>
    <p>
      {content}
    </p>
  </div>
  )
}