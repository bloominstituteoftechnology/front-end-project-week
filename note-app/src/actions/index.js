import {
  GETTING_NOTES,
  ADDING_NOTE,
  UPDATING_NOTE,
  DELETING_NOTE,
  GOT_NOTES,
  ADDED_NOTE,
  UPDATED_NOTE,
  DELETED_NOTE,
  SELECTING_NOTE,
  SELECTED_NOTE,
  SORT_GREATEST,
  SORT_LEAST,
  ERROR
} from "../reducers";

import axios from "axios";

const productionUrl = "https://jonathanhollowaynote.herokuapp.com/notes";
//const developmentUrl = "http://localhost:8080/notes";

export const fetchingNotes = () => {
  const promise = axios.get(productionUrl);
  return dispatch => {
    dispatch({ type: GETTING_NOTES });
    promise
      .then(response => {
        dispatch({ type: GOT_NOTES, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, error });
      });
  };
};

export const addingNote = note => {
  const promise = axios.post(productionUrl, note);
  return dispatch => {
    dispatch({ type: ADDING_NOTE });
    promise
      .then(response => {
        dispatch({ type: ADDED_NOTE, payload: note });
      })
      .catch(error => {
        dispatch({ type: ERROR });
      });
  };
};

export const updatingNote = (id, note) => {
  const promise = axios.put(`${productionUrl}/${id}`, note);
  return dispatch => {
    dispatch({ type: UPDATING_NOTE });
    promise
      .then(response => {
        dispatch({ type: UPDATED_NOTE, payload: note})
      })
      .catch(error => {
        dispatch({ type: ERROR, error });
      });
  };
};

export const deletingNote = id => {
  const promise = axios.delete(`${productionUrl}/${id}`);
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    promise
      .then(response => {
        dispatch({ type: DELETED_NOTE, payload: id });
        fetchingNotes();
      })
      .catch(error => {
        dispatch({ type: ERROR, error });
      });
  };
};

export const selectingNote = (id, note) => {
  return dispatch => {
    dispatch({ type: SELECTING_NOTE });
    dispatch({ type: SELECTED_NOTE, payload: note, index: id });
  };
};

export const greatToLeast = () => {
  return dispatch => {
    dispatch({ type: SORT_GREATEST });
  };
};
export const leastToGreat = () => {
  return dispatch => {
    dispatch({ type: SORT_LEAST });
  };
};
