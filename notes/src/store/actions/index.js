//actions!
//
export const FETCHING_NOTES = 'FETCHING_NOTES';

export const ADDING_NOTE = 'ADDING_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING_NOTES});
};

export const addNote = note => dispatch => {
  dispatch({type: ADDING_NOTE, payload: note});
};
