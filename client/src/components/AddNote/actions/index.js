export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const PREVIEW_NEW_NOTE = 'PREVIEW_NEW_NOTE';

export const addNewNote = (title, text) => {
  return {
    type: ADD_NEW_NOTE,
    newNote: {
      title,
      text,
    }
  }
}

export const previewNewNote = (title, text) => {
  return {
    type: PREVIEW_NEW_NOTE,
    newNote: {
      title,
      text,
    }
  }
}
