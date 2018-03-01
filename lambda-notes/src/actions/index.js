export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

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

export const deleteNote = (id) => {
  console.log('Removing note number: ', id);
  return {
    type: DELETE_NOTE,
    id,
  }
}

export const editNote = (newTitle, newText, id) => {
  return {
    type: EDIT_NOTE,
    payload: {
      title: newTitle,
      text: newText,
    },
    id,
  }
}
