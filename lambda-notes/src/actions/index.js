import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const ADDING_NOTE_SUCCESS = 'ADDING_NOTE_SUCCESS';
export const ADDING_NOTE_FAILURE = 'ADDING_NOTE_FAILURE';
export const SHOW_NOTE = 'SHOW_NOTE';
export const GO_HOME = 'GO_HOME';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE_SUCCESS = 'DELETING_NOTE_SUCCESS';
export const DELETING_NOTE_FAILURE = 'DELETING_NOTE_FAILURE';

const getUrl = 'https://fe-notes.herokuapp.com/note/get/all';
const postUrl = 'https://fe-notes.herokuapp.com/note/create';
const deleteUrl = 'https://fe-notes.herokuapp.com/note/delete';

export const getNotes = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_NOTES });
  axios
    .get(getUrl)
    .then(response => {
      console.log('Response from getNotes is: ', response);
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  dispatch({ type: CREATE_NOTE });
  axios
    .post(postUrl, note)
    .then(response => {
      dispatch({ type: ADDING_NOTE_SUCCESS });
      return axios
        .get(getUrl)
        .then(response => {
          console.log('Response from getNotes is: ', response);
          dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
        });
    })
    .catch(error => {
      dispatch({ type: ADDING_NOTE_FAILURE, payload: error });
    });
};

export const showNote = note => dispatch => {
  dispatch({ type: SHOW_NOTE, payload: note });
};

export const goHome = () => dispatch => {
  dispatch({ type: GO_HOME, payload: '' });
};

export const deleteNote = id => dispatch => {
  console.log('this is the id kid', id);
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${deleteUrl}/${id}`)
    .then(response => {
      dispatch({ type: DELETING_NOTE_SUCCESS, payload: id });

      return axios
        .get(getUrl)
        .then(response => {
          console.log('Response from getNotes is: ', response);
          dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
        });
    })

    .catch(error => {
      console.log(error);
      dispatch({ type: DELETING_NOTE_FAILURE, payload: error });
    });
};

axios
  .get('http://google.com')
  .then(res => {
    // do something with Google res

    return axios.get('http://apple.com');
  })
  .then(res => {
    // do something with Apple res
  })
  .catch(err => {
    // handle err
  });
