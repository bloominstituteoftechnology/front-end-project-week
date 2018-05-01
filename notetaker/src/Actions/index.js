import axios from 'axios';

export const FETCH = 'FETCH';
export const ADD = 'ADD';

export const getNotes = (notes = [], action) => {
  switch (action.type) {
    case FETCH:
      return {notes};
    case ADD:
      return notes.concat(action.notes);
    default:
      return notes;
  }
};