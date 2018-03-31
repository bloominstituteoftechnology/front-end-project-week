export const NOTE_FULL = 'NOTE_FULL';
export const NOTE_NEW = 'NOTE_NEW';
export const NOTE_DELETED = 'NOTE_DELETED';

export const fullNoteView = id => dispatch => {
    dispatch({ type: NOTE_FULL, payload: id });
    console.log(id);
}

export const newNote = data => dispatch => {
    dispatch({ type: NOTE_NEW, payload: data })
}

export const deleteNote = data => dispatch => {
    dispatch({ type: NOTE_DELETED, payload: data })
}