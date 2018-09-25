import axios from "axios";

export const NOTES_FETCH_START = "NOTES_FETCH_START";
export const NOTES_FETCH_COMPLETE = "NOTES_FETCH_COMPLETE";
export const NOTES_FETCH_ERROR = "NOTES_FETCH_ERROR";
export const NOTES_DELETE_START = "NOTES_DELETE_START";
export const NOTES_DELETE_COMPLETE = "NOTES_DELETE_COMPLETE";
export const NOTES_DELETE_ERROR = "NOTES_DELETE_ERROR";

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log("RESPONSE DATA", response);
        dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: NOTES_FETCH_ERROR, payload: err });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: NOTES_DELETE_START });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        dispatch({
          type: NOTES_DELETE_COMPLETE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: NOTES_DELETE_ERROR, payload: err });
      });
  };
};
