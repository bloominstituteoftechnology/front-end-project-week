import axios from "axios";
export const GETTING_NOTES = "GETTING_NOTES";
export const GOT_NOTES = "GOT_NOTES";
export const GET_NOTES_ERROR = "GET_NOTES_ERROR";
export const GETTING_NOTE = "GETTING_NOTE";
export const GOT_NOTE = "GOT_NOTE";
export const GET_NOTE_ERROR = "GET_NOTE_ERROR";
export const ADDING_NOTE = "ADDING_NOTE";
export const ADDED_NOTE = "ADDED_NOTE";
export const ADD_NOTE_ERROR = "ADD_NOTE_ERROR";
export const DELETING_NOTE = "DELETING_NOTE";
export const DELETED_NOTE = "DELETED_NOTE";
export const DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const UPDATED_NOTE = "UPDATED_NOTE";
export const UPDATE_NOTE_ERROR = "UPDATE_NOTE_ERROR";
export const SET_REDIRECT = "SET_REDIRECT";
export const RESET_REDIRECT = "RESET_REDIRECT";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: GETTING_NOTES });

    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: GOT_NOTES, payload: data });
      })

      .catch(error => dispatch({ type: GET_NOTES_ERROR, payload: error }));
  };
};

export const getNote = id => {
  return dispatch => {
    dispatch({ type: GETTING_NOTE });

    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: GOT_NOTE, payload: data });
      })

      .catch(error => dispatch({ type: GET_NOTE_ERROR, payload: error }));
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });

    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)

      .then(async () => {
        await sleep(1000);
        dispatch({ type: ADDED_NOTE });
      })

      .catch(error => dispatch({ type: ADD_NOTE_ERROR, payload: error }));
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });

    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)

      .then(async () => {
        await sleep(1000);
        dispatch({ type: DELETED_NOTE });
      })

      .catch(error => dispatch({ type: DELETE_NOTE_ERROR, payload: error }));
  };
};

export const updateNote = updatedNote => {
  console.log(updatedNote, "This is my updated string");

  return dispatch => {
    dispatch({ type: UPDATING_NOTE });

    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${updatedNote._id}`,
        updatedNote
      )

      .then(async ({ data }) => {
        await sleep(1000);
        dispatch({ type: UPDATED_NOTE, payload: data });
      })

      .catch(error => dispatch({ type: UPDATE_NOTE_ERROR, payload: error }));
  };
};

export const setRedirect = url => {
  return dispatch => {
    dispatch({ type: SET_REDIRECT, payload: url });
  };
};

export const resetRedirect = () => {
  return dispatch => {
    dispatch({ type: RESET_REDIRECT });
  };
};
