export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const FETCH_NOTES = 'FETCH_NOTES';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const editNote = () => {
  return { type: EDIT_NOTE, payload: [] };
};

export const createNote = () => {
  return { type: CREATE_NOTE, payload: [] };
};

export const deleteNote = () => {
  return { type: DELETE_NOTE, payload: [] };
}

export const fetchNotes = () => {
  return { type: FETCH_NOTES, payload: [] };
}