import axios from "axios";
const cl = console.log;

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const SUCCESS_SINGLE = "SUCCESS_SINGLE";
export const ERROR = "ERROR";
export const UPDATE = "UPDATE";
export const FILTER = "FILTER";

export const addNote = data => {
  return dispatch => {
    axios
      .post(`https://notable-littleton.herokuapp.com/notes/create`, data)
      .then(() => dispatch(fetchNotes()))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem adding new note. Please try again. ${err}`
        });
      });
  };
};

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://notable-littleton.herokuapp.com/notes`)
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
      .get(`https://notable-littleton.herokuapp.com/notes/${id}`)
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
      .delete(`https://notable-littleton.herokuapp.com/notes/delete/${id}`)
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

export const setUpdate = () => {
  return { type: UPDATE };
};

export const updateNote = data => {
  cl(5)
  return dispatch => {
    axios
      .put(`https://notable-littleton.herokuapp.com/notes/edit/${data.id}`, {
        title: data.title,
        textBody: data.textBody
      })
      .then(response => {
        cl(4)
        dispatch({ type: SUCCESS_SINGLE, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem adding new note. Please try again. ${err}`
        });
      });
  };
};

export const filterNotes = list => {
  return { type: FILTER, payload: list };
};
