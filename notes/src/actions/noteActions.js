import axios from "axios";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const SUCCESS_NOTE = "SUCCESS_NOTE";
export const ERROR = "ERROR";

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get("https://notes-ptapp.herokuapp.com/api/notes")
      .then(response => {
        dispatch({ type: SUCCESS, notes: response.data });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          errorMessage: "Trouble getting your Notes! Try Again"
        });
      });
  };
};

export const getOneNote = id => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get(`https://notes-ptapp.herokuapp.com/api/notes/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS_NOTE, singleNote: response.data });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          errorMessage: "Could not get that one Note! Try again"
        });
      });
  };
};

export const createNote = newNote => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post("https://notes-ptapp.herokuapp.com/api/notes", newNote)
      .then(response => {
        dispatch(getNotes());
      })
      .catch(error => {
        dispatch({ type: ERROR, errorMessage: "Cannot Create Note" });
      });
  };
};

export const updateNote = updatedNote => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .put(
        `https://notes-ptapp.herokuapp.com/api/notes/${updatedNote.id}`,
        updatedNote
      )
      .then(response => {
        dispatch(getNotes());
      })
      .catch(error => {
        dispatch({ type: ERROR, errorMessage: "Could Not Update!" });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .delete(`https://notes-ptapp.herokuapp.com/api/notes/${id}`)
      .then(response => {
        dispatch(getNotes());
      })
      .catch(error => {
        dispatch({ type: ERROR, errorMessage: "It did not Delete" });
      });
  };
};
