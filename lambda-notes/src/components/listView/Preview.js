import React from 'react'
import {StyledLink, MainDiv, Text} from './styled'

export default function Note(props) {
  return (
    <MainDiv>
      <StyledLink to={`/note/${props.note.id}`}>{props.note.title}</StyledLink>
      <hr />
      <Text>{props.note.content.slice(0, 80)} ...</Text>
    </MainDiv>
  )
}
