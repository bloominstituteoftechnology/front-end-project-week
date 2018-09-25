export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const UPDATE_NOTES = 'UPDATE_NOTES';


export const updateNotes = lePackage => {
  return {
    type: UPDATE_NOTES,
    payload: lePackage
  }
}

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export const editNote = content => {
  return {
    type: EDIT_NOTE,
    payload: content
  }
}

export const addNote = content => {
  return {
    type: ADD_NOTE,
    payload: content
  }
}

export const addNoteTag = newTag => {
  return {
    type: ADD_TAG,
    payload: newTag
  }
}

export const deleteTag = tagInfo => {
  return {
    type: DELETE_TAG,
    payload: tagInfo
  }
}
