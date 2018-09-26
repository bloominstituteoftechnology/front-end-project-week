// // Action Types
// export const ADD_NOTES = 'ADD_Notes ';

// // Action Creators

// export const addNote= notes => {
//   return {
//     type: ADD_NOTES,
//     payload: notes
//   };
// };

// export const getNote = note =>{
//   return{
//     type:null,
//     payload:null
//   }
// }
import axios from 'axios';
export const NOTE_FETCHING_DATA = 'NOTE_FETCHING_DATA';
export const NOTE_DATA_FETCHED = 'NOTE_DATA_FETCHED';
export const NOTE_FETCH_ERROR = 'NOTE_FETCH_ERROR';

export const INITIALIZE_NOTE_ADD = 'INITIALIZE_NOTE_ADD';
export const COMPLETE_NOTE_ADD = 'COMPLETE_NOTE_ADD';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';

export const VIEWING_NOTE = 'VIEWING_NOTE';
export const VIEWED_NOTE = 'VIEWED_NOTE';
export const ERROR = 'ERROR';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: NOTE_FETCHING_DATA  });
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then((response) => {
        dispatch({ type: NOTE_DATA_FETCHED , payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type:  NOTE_FETCH_ERROR });
      });
  };
};

export const addNote = (notes) => {
  return (dispatch) => {
    dispatch({ type: INITIALIZE_NOTE_ADD });
    axios
      .post('https://killer-notes.herokuapp.com/note/create', notes)
      .then((response) => {
        dispatch({ type: COMPLETE_NOTE_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_NOTE_ERROR });
      });
  };
}; 


export const getNote = id => {
  return dispatch => {
      dispatch({ type: VIEWING_NOTE });
       axios
          .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
          .then(res => {
              dispatch ({ type: VIEWED_NOTE, payload: res.data });
          })
          .catch(err => {
              dispatch({ type:ERROR, payload: err });
          })
  }
}
