import React from 'react'
import styled from 'styled-components'
import NoteCard from './NoteCard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const NoteCardsContainer = ({ notes }) =>

  <Container>
    {notes.map(note =>
      <NoteCard 
        key={note._id} 
        id={note._id}
        title={note.title}
        text={note.textBody}
      />
    )}
  </Container>

export default NoteCardsContainer




