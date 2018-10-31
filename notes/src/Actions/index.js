import axios from 'axios';

export const GETTING = 'GETTING';
export const GETTING_SUCCESS = 'GETTING_SUCCESS';
export const GETTING_ERROR = 'GETTING_ERROR';
export const POSTING = 'POSTING';
export const POSTING_SUCCESS = 'POSTING_SUCCESS';
export const POSTING_ERROR = 'POSTING_ERROR';


export const getNotes = () => dispatch => {
  console.log('getNotes called');
  dispatch({ type: GETTING });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log(response);
      dispatch({ type: GETTING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GETTING_ERROR, payload: error })
    });
}

export const postNote = (newNote) => dispatch => {
  console.log('postNote called');
  dispatch({ type: POSTING });
  axios
    .post('https://fe-notes.herokuapp.com/note', newNote)
    .then(response => {
      dispatch({ type: POSTING_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: POSTING_ERROR, payload: error })
    });
}
