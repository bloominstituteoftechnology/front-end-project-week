import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FETCHING_SINGLE = "FETCHING_SINGLE";
export const FETCHED_SINGLE = "FETCHED_SINGLE";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";

const URL = "http://localhost:8000/notes";

export const fetchNotes = () => {
  const promise = axios.get(`${URL}`);
  return dispatch => {
    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchNote = id => {
  const promise = axios.get(`${URL}/${id}`);
  return function(dispatch) {
    dispatch({ type: FETCHING_SINGLE });
    promise
      .then(({ data }) => {
        console.log(data[0]);
        dispatch({ type: FETCHED_SINGLE, payload: data[0] });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addNote = newNote => {
  const promise = axios.post(`${URL}`, newNote);
  return function(dispatch) {
    dispatch({ type: ADDING });
    promise
      .then(({ data }) => {
        dispatch({ type: ADDED, payload: data });
        dispatch(fetchNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const updateNote = noteEdit => {
  const promise = axios.put(`${URL}`, `${noteEdit.id}`, noteEdit);
  return function(dispatch) {
    dispatch({ type: UPDATING });
    promise
      .then(({ data }) => {
        dispatch({ type: UPDATED, payload: data });
        dispatch(fetchNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = id => {
  const promise = axios.delete(`${URL}/${id}`, { data: { id } });
  console.log(typeof id);
  return function(dispatch) {
    dispatch({ type: DELETING });
    promise
      .then(({ data }) => {
        dispatch({ type: DELETED, payload: data[0] });
        dispatch(fetchNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
