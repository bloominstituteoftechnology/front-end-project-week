import React from 'react'; 
import NoteCard from './NoteCard'

const DisplayNotes = props => {
  return (
    <div className={'display-cards'}>

      {props.notes.map( note => {
        return <NoteCard 
          history={props.history}
          key={note._id}
          note={note} />
      })}

    </div>
  )
}

export default DisplayNotes;