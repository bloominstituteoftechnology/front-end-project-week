export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

const addNote = () => (dispatch) => {
  dispatch({ type: ADD });
};

const editNote = () => (dispatch) => {
  dispatch({ type: EDIT });
};

const deleteNote = () => (dispatch) => {
  dispatch({ type: DELETE });
};
