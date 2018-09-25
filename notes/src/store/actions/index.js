export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const addNote = note => {
    return {
      type: ADD_NOTE,
      payload: note
    };
  };

export const deleteNote = title => {
    return {
        type: DELETE_NOTE,
        title
    }
}

export const setUpdateNote = title => {
    return {
        type: SET_UPDATE_NOTE,
        payload: title,
    };
}

export const updateNote = note => {
    return {
        type: UPDATE_NOTE,
        payload: note
    }
}