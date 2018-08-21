export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';


export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

