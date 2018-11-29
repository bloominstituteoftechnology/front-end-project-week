export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const addNewNote = (title, text) => {
  return {
    type: ADD_NEW_NOTE,
    newNote: {
      title,
      text,
    }
  }
}

export const PREVIEW_NEW_NOTE = 'PREVIEW_NEW_NOTE';
export const previewNewNote = (title, text) => {
  return {
    type: PREVIEW_NEW_NOTE,
    newNote: {
      title,
      text,
    }
  }
}

export const RESET_NEW_NOTE = 'RESET_NEW_NOTE';
export const resetNewNote = () => {
  return {
    type: RESET_NEW_NOTE,
  }
}

export const REQUEST_ADD_NOTE = 'REQUEST_ADD_NOTE';
export const requestAddNote = () => {
  return {
    type: REQUEST_ADD_NOTE,
  };
}

export const POST_ADD_NOTE = 'POST_ADD_NOTE';
export const postAddNote = () => {
  return {
    type: POST_ADD_NOTE,
  }
};
