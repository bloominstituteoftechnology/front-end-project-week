import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const SUCCESS_SINGLE = "SUCCESS_SINGLE";
export const ERROR = "ERROR";

export const addNote = data => {
  return dispatch => {
    axios.post(`https://fe-notes.herokuapp.com/note/create`, data)
      .then(() => dispatch(fetchNotes()))
      .catch(err => {
        dispatch({ type: ERROR, payload: `Problem adding new note. Please try again. ${err}`})
      })
  }
};

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem with note list extraction, ${err}`
        });
      });
  };
};

export const fetchSingleNote = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS_SINGLE, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem with single note extraction, ${err}`
        });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        dispatch(fetchNotes());
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem with deleting note, ${err}`
        });
      });
  };
};
