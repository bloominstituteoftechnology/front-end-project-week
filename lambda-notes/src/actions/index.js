
export const NOTE_EXPANDED = 'NOTE_EXPANDED';
export const NOTE_CREATED = 'NOTE_CREATED';
export const NOTE_DELETED = 'NOTE_DELETED';


export const showWholeNote = id => dispatch => {
  dispatch({ type: NOTE_EXPANDED, payload: id });
  console.log(id);
}


export const addNewNoteAction = data => dispatch => {
  dispatch({ type: NOTE_CREATED, payload: data })
}

export const deleteNoteAction = data => dispatch => {
  dispatch({ type: NOTE_DELETED, payload: data })
}