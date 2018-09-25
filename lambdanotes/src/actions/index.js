// Action Types
export const ADD_NOTES = 'ADD_Notes ';

// Action Creators

export const addNote= notes => {
  return {
    type: ADD_NOTES,
    payload: notes
  };
};

export const getNote = note =>{
  return{
    type:null,
    payload:null
  }
}