import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const GET_NOTES = 'GET_NOTES';
export const POSTING_NOTE = 'POSTING_NOTE';
export const POST_NOTE = 'POST_NOTE';
export const ERROR = 'ERROR';

// URLs from original project:
// const GET_URL = 'https://killer-notes.herokuapp.com/note/get/all';
// const POST_URL = 'https://killer-notes.herokuapp.com/note/create';

// New URLs to connect to backend-project-week
const GET_ALL_URL = 'http://localhost:3300/notes';
const POST_URL = 'http://localhost:3300/notes';
const GET_BY_ID_URL = 'http://localhost:3300/notes/:id';
const PUT_URL = 'http://localhost:3300/notes/:id';
const DELETE_URL = 'http://localhost:3300/notes/:id';  


export const getNotes = () => {
    return dispatch => {
      dispatch({ type: GETTING_NOTES });
      axios
        .get(`${GET_ALL_URL}`)
        .then(response => {
          dispatch({ type: GET_NOTES, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
  };
  
  export const createNote = newNote => {
    console.log('createNote fired');
    console.log(newNote);
    return dispatch => {
      dispatch({ type: POSTING_NOTE });
      axios
        .post(`${POST_URL}`, newNote)
        .then((response) => {
          dispatch({ type: POST_NOTE, payload: response.data });
          console.log('Note posted. Id: ', response);
          dispatch(getNotes());
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
      
      
    };
  };

