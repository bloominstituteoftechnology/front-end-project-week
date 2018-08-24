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

export const fetchNotes = () => {
  const promise = axios.get("https://killer-notes.herokuapp.com/note/get/all");
  return function(dispatch) {
    promise
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchNote = id => {
  const promise = axios.get(
    `https://killer-notes.herokuapp.com/note/get/${id}`
  );
  return function(dispatch) {
    dispatch({ type: FETCHING_SINGLE });
    promise
      .then(({ data }) => {
        dispatch({ type: FETCHED_SINGLE, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addNote = newNote => {
  const promise = axios.post(
    "https://killer-notes.herokuapp.com/note/create",
    newNote
  );
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
  const promise = axios.put(
    `https://killer-notes.herokuapp.com/note/edit/${noteEdit._id}`,
    noteEdit
  );
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
  const promise = axios.delete(
    `https://killer-notes.herokuapp.com/note/delete/${id}`
  );
  return function(dispatch) {
    dispatch({ type: DELETING });
    promise
      .then(({ data }) => {
        dispatch({ type: DELETED });
        dispatch(fetchNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
