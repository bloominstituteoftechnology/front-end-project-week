import React from 'react'
import Preview from './Preview'
import { List, Title, MainList } from './styled'

export default function ListNotes(props) {
  return (
    <MainList>
      <Title>Your Notes:</Title>
      <List>
        {props.notes.map( note => <Preview key={note.id} note={note} />)}
      </List>
    </MainList>
  )
}
