//constants

export const CREATE_NOTE = "CREATE_NOTE";
export const READ_NOTE = "READ_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const createNote = note => ({ type: CREATE_NOTE, payload: note });
export const readNote = note => ({ type: READ_NOTE, payload: note });
export const updateNote = note => ({ type: UPDATE_NOTE, payload: note });
export const deleteNote = id => ({ type: DELETE_NOTE, payload: id});


