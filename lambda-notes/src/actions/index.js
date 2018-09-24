import axios from 'axios';
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INITIALIZE_NOTE_ADD = 'INITIALIZE_NOTE_ADD';
export const COMPLETE_NOTE_ADD = 'COMPLETE_NOTE_ADD';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';
export const DISPLAY_UPDATE_FORM = 'DISPLAY_UPDATE_FORM';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    //Action that indicates data is being fetched
    dispatch({ type: FETCHING_DATA });
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then((response) => {
        //Action that indicates data has been fetched, and includes with it the response payload
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addNote = (newNote) => {
  return (dispatch) => {
    //Again, action to indicate an API call is about to be made, this time for a POST
    dispatch({ type: INITIALIZE_NOTE_ADD });
    //Below, you're making the POST call to the API, with newFriend as the friend object youre adding. That newFriend object needs to follow the API framework for how objects look
    axios 
      .post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then((response) => {
        //When POST is successful, the dispatch then sends an action (COMPLETE_FRIEND_ADD, and associated data, which in this case is the payload with response.data that includes the new friend added)
        dispatch({ type: COMPLETE_NOTE_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_NOTE_ERROR });
      });
  };
};