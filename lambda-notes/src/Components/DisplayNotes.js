import React from 'react'; 
import NoteCard from './NoteCard'

const DisplayNotes = props => {
  return (
    <div className={'display-cards'}>
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  )
}

export default DisplayNotes;