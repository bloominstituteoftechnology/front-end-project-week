export const ADD_NOTE = 'ADD_NOTE';



export const addNote = (added) => {
  return {
    type: ADD_NOTE,
    payload: added,
  };
};