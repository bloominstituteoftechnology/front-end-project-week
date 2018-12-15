import axios from "axios";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";
export const ADDING_NOTE = "ADDING_NOTE";
export const NOTE_ADDED = "NOTE_ADDED";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const NOTE_UPDATED = "NOTE_UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const SINGLE_FETCHED = "SINGLE_FETCHED";
export const FETCHING_SINGLE = "FETCHING_SINGLE";
export const REGISTERING_USER = "REGISTERING_USER";
export const REGISTERED_USER = "REGISTERED_USER";
export const SEARCH = "SEARCH";
export const SORT_CHARACTERS = "SORT_CHARACTERS";
export const SORT_CONTENT = "SORT_CONTENT";
export const NO_SORT = "NO_SORT";

const url = `https://csilla-notes.herokuapp.com/api/notes`;
const baseUrl = `https://csilla-notes.herokuapp.com`;

//const url = `http://localhost:5500/api/notes/`;
//const baseUrl = `http://localhost:5500`;
export const fetchNotes = () => {
  const noteData = axios.get(`https://csilla-notes.herokuapp.com/api/notes`);
  return function(dispatch) {
    noteData
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload: data.notes });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const addNote = newNote => {
  const noteData = axios.post(`https://csilla-notes.herokuapp.com/api/notes/`, newNote);
  return function(dispatch) {
    dispatch({ type: ADDING_NOTE });
    noteData
      .then(({ data }) => {
        dispatch({
          type: NOTE_ADDED,
          payload: { _id: data.success, ...newNote }
        });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchSingleNote = id => {
  const noteData = axios.get(`https://csilla-notes.herokuapp.com/api/notes/${id}`);
  return function(dispatch) {
    dispatch({ type: FETCHING_SINGLE });
    noteData
      .then(({ data }) => {
        dispatch({ type: SINGLE_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const updateNote = (noteID, updatedNote) => {
  const noteData = axios.put(
    `https://csilla-notes.herokuapp.com/api/notes/${noteID}`,
    updatedNote
  );

  return function(dispatch) {
    dispatch({ type: UPDATING_NOTE });

    noteData
      .then(data => {
        console.log(data);
        dispatch({ type: NOTE_UPDATED, updatedNote, id: data.data._id });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const deleteNote = id => {
  const noteData = axios.delete(`https://csilla-notes.herokuapp.com/api/notes/${id}`);
  return function(dispatch) {
    dispatch({ type: DELETING }); 
    noteData
      .then(({ data }) => {
        dispatch({ type: DELETED, id });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const search = sString => {
  return dispatch => {
    dispatch({ type: SEARCH, sString });
  };
};
export const registerUser = (user, history) => {
  return dispatch => {
    dispatch({ type: REGISTERING_USER });

    axios
      .post(`https://csilla-notes.herokuapp.com/api/register`, user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: REGISTERED_USER });
      })
      .then(() => history.push("/"))
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response.data.message });
      });
  };
};
export const sort = sortType => {
  console.log("CALLED");
  console.log(sortType);
  return dispatch => {
    console.log("IN DISPATCH");
    if (sortType === "CHARACTERS") dispatch({ type: SORT_CHARACTERS });
    else if (sortType === "CONTENT") dispatch({ type: SORT_CONTENT });
    else dispatch({ type: NO_SORT });
  };
};
