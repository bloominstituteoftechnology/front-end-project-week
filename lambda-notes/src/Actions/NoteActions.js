import * as data from '../Data/Notes.json';

export const GETNOTES = 'GETNOTES';
export const ADDNOTE = 'ADDNOTE';
export const UPDATENOTE = 'UPDATENOTE';
export const DELETENOTE = 'DELETENOTE';

export const getNotes = () => {
  return ({type: GETNOTES, payload: data.notes});
}
export const addNote = (note) => {
  return ({type:ADDNOTE, payload: note});
}
export const updateNote = (id, update) => {
  return ({type: UPDATENOTE, id: id, payload: update});
}
export const deleteNote = (id) => {
  return ({type: DELETENOTE, payload: id});
}
