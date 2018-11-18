import React from 'react'
import {StyledLink, MainDiv, Text} from './styled'

export default function Note(props) {
  return (
    <MainDiv>
      <StyledLink to={`/note/${props.note._id}`}>{props.note.title}</StyledLink>
      <hr />
      <Text>{props.note.textBody.slice(0, 80)} ...</Text>
    </MainDiv>
  )
}
