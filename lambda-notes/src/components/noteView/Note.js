import React from 'react'

export default function Note(props) {
  return (
    <div>
      <h1>{props.note.title}</h1>
      <p>{props.note.textBody}</p>
    </div>
  )
}
