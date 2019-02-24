import React from "react"

import { NoteWrapper, Title } from "../styles/noteStyles"

const Note = props => {
  return (
    <NoteWrapper>
      {/* <Title>{props.note.title}</Title> */}
      <Title>Note Title</Title>
      {/* <p>{props.note.textBody}</p> */}
      <p>
        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam
        metus, blandit ac purus a, efficitur mollis …
      </p>
    </NoteWrapper>
  )
}

export default Note
