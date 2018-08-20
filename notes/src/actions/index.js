import axios from 'axios';

//GET ALL
export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const GET_ALL_FAILURE = 'GET_ALL_FAILURE';

//GET
export const GET_NOTE = 'GET_NOTE';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

//ADD
export const ADD_NOTE = 'ADD_NOTE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

//DELETE
export const DEL_NOTE = 'DEL_NOTE';
export const DEL_SUCCESS = 'DEL_SUCCESS';
export const DEL_FAILURE = 'DEL_FAILURE';

//MODIFY
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';



const url = `https://killer-notes.herokuapp.com/note`;

export const getAllNotes = () => {
  return function(dispatch) {
    dispatch({type: GET_ALL_NOTES});
    axios.get(`${url}/get/all`)
      .then(function(response) {
          dispatch({type: GET_ALL_SUCCESS, payload: response.data})
        })
      .catch(function(error){
        console.log(error)
        dispatch({type: GET_ALL_FAILURE, error: error})
      })
  }
}

export const getNote = (id) => {
    return function(dispatch) {
      dispatch({type: GET_NOTE});
      axios.get(`${url}/get/${id}`)
        .then(function(response) {
            dispatch({type: GET_SUCCESS, payload: response.data})
          })
        .catch(function(error){
          console.log(error)
          dispatch({type: GET_FAILURE, error: error})
        })
    }
  }

export const addNote = (note) => {
  return function(dispatch) {
    dispatch({type: ADD_NOTE});
    axios.post(`${url}/create`, {
      tags: note.tags,
      title: note.title,
      textBody: note.textBody
    })
      .then(function(response){
        console.log(response);
        dispatch({type: ADD_SUCCESS, payload: response.data})
      })
      .catch(function(error){
        console.log(error)
        dispatch({type: ADD_FAILURE, error: error})
      })
  }
}

export const deleteNote = (id) => {
  return function(dispatch) {
    dispatch({type: DEL_NOTE});
    axios.delete(`${url}/delete/${id}`)
    .then(function(response){
      console.log(response)
      dispatch({type: DEL_SUCCESS, payload: response.data})
    })
    .catch(function(error){
      console.log(error)
      dispatch({type: DEL_FAILURE, error: error})
    })
  }
}

export const editNote = (note) => {
  return function(dispatch) {
    dispatch({type: EDIT_NOTE});
    axios.put(`${url}/edit/${note.id}`, {
        tags: note.tags,
        title: note.title,
        textBody: note.textBody
    })
    .then(function(response){
      console.log(response)
      dispatch({type: EDIT_SUCCESS, payload: response.data})
    })
    .catch(function(error){
      console.log(error)
      dispatch({type: EDIT_FAILURE, error: error.data})
    })
  }
}