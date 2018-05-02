export const ADDNOTE = 'ADDNOTE';
export const EDITNOTE = 'EDITNOTE';
export const DELETENOTE = 'DELETENOTE';

export const addNoteToState = noteData => {
  // const noteObj = {
  //   value: noteData,
  // }
  return {
    type: ADDNOTE,
    payload: noteData,
  }
}

export const editNoteOnState = noteData => {
  return {
    type: EDITNOTE,
    payload: noteData,
  }
}

export const deleteNoteOnState = noteData => {
  return {
    type: DELETENOTE,
    payload: noteData
  }
}