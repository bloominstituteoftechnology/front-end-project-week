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

export const viewNote = (info) => {
  return {
    type: 'VIEW_NOTE',
    payload: info,
  }
}

export const deleteNote = (info) => {
  return {
    type: 'DELETE_NOTE',
    payload: info,
  }
}