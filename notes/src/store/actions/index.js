export const ADD_NOTE = 'ADD_NOTE';


export const addNote = note => {
    return {
      type: ADD_NOTE,
      payload: note
    };
  };