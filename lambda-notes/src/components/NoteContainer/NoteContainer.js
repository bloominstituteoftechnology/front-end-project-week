import React from 'react'

const NoteContainer = props => {
  return (
    <div>
       {this.props.notes.map((note, index) => <NoteList
        textBody={note.textBody}
         />)}
    </div>
  )
}


export default NoteContainer