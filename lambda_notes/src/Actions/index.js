import axios from "axios";
import { SERVER_URL } from "../Config/config";
export const FETCHING_NOTES = "FETCHING_NOTES";
export const ADDED_NOTE = "ADDED_NOTE";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const fetchNote = () => {
  return function(dispatch) {
    dispatch({
      type: FETCHING_NOTES
    });
    axios
      .get(`${SERVER_URL}/notes`)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Request failed"
        });
      });
  };
};

export const addNote = note => {
  return function(dispatch) {
    axios
      .post(`${SERVER_URL}/notes`, note)
      .then(response => {
        dispatch({
          type: ADDED_NOTE,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Failed to add note"
        });
      });
  };
};

export const editNote = (id, note) => {
  return function(dispatch) {
    axios
      .put(`${SERVER_URL}/notes/${id}`, note)
      .then(response => {
        dispatch({
          type: UPDATED_NOTE,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Failed to update note"
        });
      });
  };
};

export const deleteNote = id => {
  return function(dispatch) {
    axios
      .delete(`${SERVER_URL}/notes/${id}`)
      .then(response => {
        console.log("deleteNote:", response);
        dispatch({
          type: DELETED_NOTE,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Failed to delete note"
        });
      });
  };
};
