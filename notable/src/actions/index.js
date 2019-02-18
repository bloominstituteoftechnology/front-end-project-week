import axios from "axios";
// eslint-disable-next-line
const cl = console.log;
const address = 'https://notable-littleton.herokuapp.com'
// const address = "http://localhost:4700";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const SUCCESS_SINGLE = "SUCCESS_SINGLE";
export const ERROR = "ERROR";
export const UPDATE = "UPDATE";
export const FILTER = "FILTER";
export const SIGNIN = "SIGNIN";
export const AUTH = "AUTH";

export const addNote = data => {
  return dispatch => {
    axios
      .post(`${address}/notes/create`, data)
      .then(() => dispatch(fetchNotes()))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem adding new note. Please try again. ${err}`
        });
      });
  };
};

export const fetchNotes = header => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`${address}/notes`, header)
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
      .get(`${address}/notes/${id}`)
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
      .delete(`${address}/notes/delete/${id}`)
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
  return dispatch => {
    axios
      .put(`${address}/notes/edit/${data.id}`, {
        title: data.title,
        textBody: data.textBody
      })
      .then(response => {
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

export const loginReq = user => {
  return dispatch => {
    axios
      .post(`${address}/signin`, user)
      .then(response => {
        dispatch({ type: SIGNIN, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem signing in. ${err}`
        });
      });
  };
};

export const register = user => {
  return dispatch => {
    axios
      .post(`${address}/register`, user)
      .then(response => {
        dispatch({ type: SIGNIN, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: `Problem registering. ${err}` });
      });
  };
};

export const filterNotes = list => {
  return { type: FILTER, payload: list };
};

export const checkAuth = header => {
  return dispatch => {
    axios
      .get(`${address}/users`, header)
      .then(response => {
        dispatch({ type: AUTH, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Problem getting active user. ${err}`
        });
      });
  };
};
