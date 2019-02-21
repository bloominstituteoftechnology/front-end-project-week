import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHALL = "FETCHALL";
export const FETCHONE = "FETCHONE";
export const ERROR = "ERROR";
export const ADDED = "ADDED";
export const UPDATED = "UPDATED";
export const DELETED = "DELETED";
export const FETCHALLTAGS = "FETCHALLTAGS";
export const FETCHNOTETAGS = "FETCHNOTETAGS";
export const FETCHONETAG = "FETCHONETAG";
export const ADDEDTAG = "ADDEDTAG";
export const UPDATEDTAG = "UPDATEDTAG";
export const DELETEDTAG = "DELETEDTAG";
// export const REGISTER = "REGISTER";
// export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";

const url = "https://al-backend-notes.herokuapp.com";

// export const register = newUser => dispatch => {
//   axios.post(`${url}/auth/register`, newUser)
//   .then(res => {
//     dispatch({type: REGISTER, payload: res.data})
//   })
//   .catch(err => {
//     dispatch({type: ERROR, payload: err})
//   })
// }
// export const login = user => dispatch => {
//   axios.post(`${url}/auth/login`, user)
//   .then(res => {
//     dispatch({type: LOGIN, payload: res.data})
//     .catch(err => {
//       dispatch({type: ERROR, payload: err})
//     })
//   })
// }

// export const logout = () => dispatch => {
//   axios.post(`${url}/auth/logout`)
//   .then(res => {
//     dispatch({type: LOGOUT, payload: res.data})
//     .catch(err => {
//       dispatch({type: ERROR, payload: err})
//     })
//   })
// }

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`${url}/notes`)
    .then(response => {
      dispatch({ type: FETCHALL, payload: response.data });
    })
    .then(response => {
      axios.get(`${url}/tags`).then(res => {
        dispatch({ type: FETCHALLTAGS, payload: res.data });
      });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const fetchTags = () => dispatch => {
    axios.get(`${url}/tags`).then(res => {
        dispatch({ type: FETCHALLTAGS, payload: res.data });
      })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
}
export const fetchNote = id => dispatch => {
  dispatch({ type: FETCHING });
  return axios
    .get(`${url}/notes/${id}`)
    .then(response => {
      dispatch({ type: FETCHONE, payload: response.data });
    })
    .then(response => {
      axios.get(`${url}/notes/${id}/tags`).then(res => {
        dispatch({ type: FETCHNOTETAGS, payload: res.data });
      })
    })
    .then(res => {
      axios.get(`${url}/tags`).then(res => {
        dispatch({ type: FETCHALLTAGS, payload: res.data });
      })
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};
export const addNote = newNote => dispatch => {
  return axios
    .post(`${url}/notes`, newNote)
    .then(response => {
      dispatch({ type: ADDED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const addTag = (newTag) => dispatch => {
  return axios
    .post(`${url}/tags/${newTag.note_id}`, newTag)
    .then(response => {
      dispatch({ type: ADDEDTAG, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const updateNote = editedNote => dispatch => {
  axios
    .put(`${url}/notes/${editedNote.id}`, editedNote)
    .then(response => {
      dispatch({ type: UPDATED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const deleteNote = id => dispatch => {
  return axios
    .delete(`${url}/notes/${id}`)
    .then(response => {
      dispatch({ type: DELETED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};

export const deleteTag = id => dispatch => {
  return axios
    .delete(`${url}/tags/${id}`)
    .then(response => {
      dispatch({ type: DELETEDTAG, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error });
    });
};
