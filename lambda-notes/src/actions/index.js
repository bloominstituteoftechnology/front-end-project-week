export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let nextNoteID = 0;

export const addNote = (noteTitle, noteText) => {
  return {
    type: ADD_NOTE,
    id: nextNoteID++,
    payload: {
      title: noteTitle,
      text: noteText,
    },
    //Remember that note should have two props, note.title and note.text.
  }
}

export const deleteNote= (id) => {
  console.log('Removing note number: ', id);
  return {
    type: DELETE_NOTE,
    id,
  }
}
