import axios from "axios";
const URL = "https://killer-notes.herokuapp.com/note/get/all";

//Action types:
export const FETCHING = "FETCHING_NOTES";
export const FETCHED = "FETCHED_NOTES_SUCCESS";
export const ERROR = "NOTES_ERROR";
export const ADDING = "ADDING_NOTE";
export const ADDED = "ADDED_NOTE";
export const EDITING = "EDITING_NOTE";
export const EDITED = "EDITED_NOTE";
export const DELETING = "DELETING_NOTE";

//Action creators:

export const getNotesData = () => {
  return dispatch => {
    console.log("dispatching");
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => dispatch({ type: FETCHED, payload: response.data }))
      .catch(err => console.log(err));
  };
};
