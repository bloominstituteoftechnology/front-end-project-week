import axios from "axios";
export const FETCH_SINGLE_NOTE = "FETCH_SINGLE_NOTE";
export const FETCH_NOTES = "FETCH_NOTES";
export const ERROR = "ERROR";
export const FETCHING_NOTES = "FETCHING_NOTES";

let home_path = "http://localhost:3000/";

export const submitNewNote = newNote => {
  return function(dispatch) {
    axios
      .post(`http://localhost:8000/api/notes`, newNote)
      .then(({ data }) => {
        window.location.href = home_path;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchSingleNote = (URL, id) => {
  console.log("at action, id is: ", id);
  const promise = axios.get(`${URL}/${id}`);
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    promise
      .then(response => {
        dispatch({
          type: FETCH_SINGLE_NOTE,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
    /*return {
    type: FETCH_SINGLE_NOTE,
    payload: id
  };*/
  };
};

export const editNote = (edited, id) => {
  return function(dispatch) {
    axios.put(`http://localhost:8000/api/notes/${id}`, edited).then(({ data }) => {
      window.location.href = home_path;
    });
  };
};

export const deleteNote = id => {
  console.log("id is: ", id);
  return function(dispatch) {
    axios
      .delete(`http://localhost:8000/api/notes/${id}`)
      .then(({ data }) => {
        window.location.href = "http://localhost:3000/";
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchNotes = URL => {
  return function(dispatch) {
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: FETCH_NOTES, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
