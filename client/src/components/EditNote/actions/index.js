import axios from 'axios';

export const RESET_EDIT_NOTE = 'RESET_EDIT_NOTE';
export const resetEditNote = () => {
  return {
    type: RESET_EDIT_NOTE,
  }
}

export const PREVIEW_EDIT_NOTE = 'PREVIEW_EDIT_NOTE';
export const previewEditNote = (title, text, id) => {
  return {
    type: PREVIEW_EDIT_NOTE,
    editNote: {
      title,
      text,
      id,
    }
  }
}

export const REQUEST_EDIT_NOTE = 'REQUEST_EDIT_NOTE';
export const requestEditNote = () => {
  return {
    type: REQUEST_EDIT_NOTE,
  }
}

export const DID_EDIT_NOTE = 'DID_EDIT_NOTE';
export const didEditNote = () => {
  return {
    type: DID_EDIT_NOTE,
  }
}

export const editNote = (title, textBody, id) => {
  return dispatch => {
    dispatch(requestEditNote());
    return axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
      title,
      textBody,
    })
    .then(res => dispatch(didEditNote()))
    .catch(err => {
      console.log(err);
    });
  }
}
