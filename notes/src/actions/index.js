import shortid from 'shortid';

export const addNote = (info) => {
  return {
    type: 'ADD_NOTE',
    payload: { ...info, id: shortid.generate() },
  }
}

export const editNote = (info) => {
  return {
    type: 'EDIT_NOTE',
    payload: info,
  }
}