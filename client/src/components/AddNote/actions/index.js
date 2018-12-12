import axios from 'axios';

export const addNewNote = (title, text, tags) => {
  console.log('AddNote/actions/index.js', tags);
  return dispatch => {
    dispatch(requestAddNote());
    return axios.post('https://fe-notes.herokuapp.com/note/create', {
      tags: tags,
      title: title,
      textBody: text,
  })
  .then(res => {
    console.log(res);
    //dispatch(postAddNote(res))
  })
  .catch(err => {
    console.log(err);
  });
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
export const postAddNote = postId => {
  return {
    type: POST_ADD_NOTE,
    postId,
  }
};
