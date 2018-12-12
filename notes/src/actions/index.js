import axios from "axios";

export const FETCH_NOTES_START = "FETCH_NOTES_START";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

export const FETCH_NOTES_BY_SORT_START = "FETCH_NOTES_BY_SORT_START";
export const FETCH_NOTES_BY_SORT_SUCCESS = "FETCH_NOTES_BY_SORT_SUCCESS";
export const FETCH_NOTES_BY_SORT_FAILURE = "FETCH_NOTES_BY_SORT_FAILURE";

export const FETCH_NOTES_BY_ID_START = "FETCH_NOTES_BY_ID_START";
export const FETCH_NOTES_BY_ID_SUCCESS = "FETCH_NOTES_BY_ID_SUCCESS";
export const FETCH_NOTES_BY_ID_FAILURE = "FETCH_NOTES_BY_ID_FAILURE";

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

export const EDIT_NOTE_START = "EDIT_NOTE_START";
export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE";

export const addNote = item => dispatch => {
  dispatch({ type: ADD_NOTE_START });
  axios
    .post("https://fe-notes.herokuapp.com/note/create", item)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES_START });
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      console.log("fetch finished");
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
};

export const getNotesBySort = sortType => dispatch => {
  dispatch({ type: FETCH_NOTES_BY_SORT_START });
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      console.log("fetch finished");
      let result = response.data.sort(sortType);;
      console.log(result);
      dispatch({
        type: FETCH_NOTES_BY_SORT_SUCCESS,
        payload: result
      });
    })
    .catch(err =>
      dispatch({ type: FETCH_NOTES_BY_SORT_FAILURE, payload: err })
    );
};

export const getNotesById = id => dispatch => {
  dispatch({ type: FETCH_NOTES_BY_ID_START });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      console.log("fetch finished");
      dispatch({ type: FETCH_NOTES_BY_ID_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTES_BY_ID_FAILURE, payload: err }));
};

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE_START });
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};

export const editNote = (id, item) => dispatch => {
  dispatch({ type: EDIT_NOTE_START });
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, item)
    .then(response => {
      console.log(response);
      dispatch({
        type: EDIT_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};
