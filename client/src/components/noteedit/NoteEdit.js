import React from 'react';

import Form from '../misc/Form'

const NoteEdit = props => {
  console.log(props);
  return (
    <div>
      <div>
        <h2>Edit Note:</h2>
      </div>
      
      {
        props.noteList.filter(note => {
          return note.id === props.match.params.id;
        })
          .map(note => {
            return (
              <Form
                key={ note.id }
                buttonContent='Update'
                buttonOnClick={ () => props.buttonOnClick(note.id, props.title, props.content) }
                content={ props.content }
                setInputVal={ props.setInputVal }
                setTextAreaVal={ props.setTextAreaVal }
                title={ props.title }
              />
            )
          })
      }
    </div>
  )
}
 
export default NoteEdit;