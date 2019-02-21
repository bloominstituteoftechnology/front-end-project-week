import axios from 'axios';
export const GET_FETCH = 'GET_FETCH';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const ADD_FETCH = 'ADD_FETCH';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const DELETE_FETCH = 'DELETE_FETCH';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';
export const UPDATE_FETCH = 'UPDATE_FETCH';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

 export const getNotes = () => dispatch => {
    dispatch({ type: GET_FETCH});
  console.log('fetched');
  axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
          dispatch({ type: GET_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: GET_FAILURE, payload: err });
      })
}

 export const addNote = (obj) => dispatch => {
    dispatch({ type: ADD_FETCH });
  console.log('fetched');
  axios
      .post('https://fe-notes.herokuapp.com/note/create', obj)
      .then(response => {
          dispatch({ type: ADD_SUCCESS, payload: {payload:response.data, obj: obj}});
      })
      .catch(err => {
          dispatch({ type: ADD_FAILURE, payload: err });
      })
}

 export const updateNote = (id, obj) => dispatch => {
    console.log(id)
    dispatch({ type: UPDATE_FETCH});
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, obj)
      .then(response => {
        dispatch({ type: UPDATE_SUCCESS, payload: response.data});
      })
      .catch(err => {
        dispatch({ type: UPDATE_FAILURE, payload: err });
      })
}

 export const deleteNote = (id) => dispatch => {
    dispatch({ type: DELETE_FETCH });
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_SUCCESS, payload: { _id: id, success: response.data.success}});

       })
      .catch(err => {
        dispatch({ type: DELETE_FAILURE, payload: err });
      })
}