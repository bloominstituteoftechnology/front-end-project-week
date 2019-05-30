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

export const UPDATING_NOTES = 'UPDATING_NOTES';
export const UPDATED_NOTES = 'UPDATED_NOTES';

export const DELETING_NOTES = 'DELETING_NOTES';
export const DELETED_NOTES = 'DELETED_NOTES';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: NOTE_FETCHING_DATA  });
    axios
      .get('https://notes-backend-server.herokuapp.com/notes')
      .then((response) => {
        dispatch({ type: NOTE_DATA_FETCHED , payload: response.data.notes });
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
      .post('https://notes-backend-server.herokuapp.com/addNote', notes)
      .then(() => {
        dispatch({ type: COMPLETE_NOTE_ADD});
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
          .get(`https://notes-backend-server.herokuapp.com/notes/${id}`)
          .then(res => {
              dispatch ({ type: VIEWED_NOTE, payload: res.data.notes[0]});
          })
          .catch(err => {
              dispatch({ type:ERROR, payload: err });
          })
  }
}

export const updateNote = note => {
  return dispatch => {
      dispatch({ type: UPDATING_NOTES });
      axios
      .put(`https://notes-backend-server.herokuapp.com/updateNote/${note.id}`, note)
      .then(() => {
          dispatch({ type: UPDATED_NOTES })
      })
      .catch(err => {
          dispatch({ tpye: ERROR, payload: err});
      })
  }
}

export const deleteNote = (NoteId, history) => {
  return dispatch => {
      dispatch({ type: DELETING_NOTES });
      axios
          .delete(`https://notes-backend-server.herokuapp.com/deleteNote/${NoteId}`)
          .then(res => {
              dispatch({ type: DELETED_NOTES });
          })
          .then(() => history.push('/'))
          .catch(err => {
              dispatch({ tpye: ERROR, payload: err});
          })
  }
}