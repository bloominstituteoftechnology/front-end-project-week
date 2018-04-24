import {notes} from '../Data/Notes';
export const GETNOTES = 'GETNOTES';
export const ADDNOTE = 'ADDNOTE';

export const getNotes = () => {
  return ({type: GETNOTES, payload: notes})
}
export const addNote = (note) => {
  return ({type: ADDNOTE, payload: note});
}
