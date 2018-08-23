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
        key={note.id} 
        id={note.id}
        title={note.title}
        content={note.content}
      />
    )}
  </Container>

export default NoteCardsContainer




