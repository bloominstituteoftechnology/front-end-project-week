import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHALL = "FETCHALL";
export const FETCHONE = "FETCHONE";
export const ERROR = "ERROR";
export const ADDED = "ADDED";
export const UPDATED = "UPDATED";
export const DELETED = "DELETED";
// export const ADD_TAG = 'ADD_TAG';
// export const ADD_TAG_TO_TAGS = 'ADD_TAG_TO_TAGS';
// export const ADD_TAGS_TO_NOTE = 'ADD_TAGS_TO_NOTE';
// export const CHANGE_TAG_IDS = 'CHANGE_TAG_IDS';

export const FETCHALLTAGS = "FETCHALLTAGS";
export const FETCHNOTETAGS = "FETCHNOTETAGS";
export const FETCHONETAG = "FETCHONETAG";
export const ADDEDTAG = "ADDEDTAG";
export const UPDATEDTAG = "UPDATEDTAG";
export const DELETEDTAG = "DELETEDTAG";

// const url = 'https://fe-notes.herokuapp.com/note'
const url = "https://al-backend-notes.herokuapp.com";

// export const addTag = tag => dispatch => {
//     dispatch({type: ADD_TAG, payload: tag, id: Date.now(), date: Date.now()});

// }

// export const addTagToTags = () => dispatch => {
//     dispatch({type: ADD_TAG_TO_TAGS});
// }

// export const addTagsToNote = () => dispatch => {
//     dispatch({type: ADD_TAGS_TO_NOTE});
// }

// export const changeTagIds = id => dispatch => {
//     dispatch({type: CHANGE_TAG_IDS, payload: id})
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
      });
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

export const addTag = (newTag, id) => dispatch => {
  return axios
    .post(`${url}/tags/${id}`, newTag)
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
