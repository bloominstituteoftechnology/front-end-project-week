import axios from 'axios';

export const FETCH = 'FETCH';
export const ADD = 'ADD';

export const getNotes = (notes = [], action) => {
  return { type: FETCH, notes: notes}
};

export const addNote = (notes = [], action) => {
  return { type: ADD, notes: notes.concat(action.notes)}
};