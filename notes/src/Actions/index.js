import axios from "axios";

// getNotes action creator TODO: fill in logic
export const getNotes = () => {
  return dispatch => {
    axios
      .get(`http://localhost:5500/api/all`)
      .then(response => {
        dispatch({ type: "NOTES_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// addNotes action creator TODO: fill in logic
export const addNote = newNote => {
  return dispatch => {
    axios
      .post(`http://localhost:5500/api/create`, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// getNote action creator TODO: fill in logic
export const getNote = id => {
  return dispatch => {
    console.log("get note called");
    axios
      .get(`http://localhost:5500/api/view/${id}`)
      .then(response => {
        console.log("I am a response", response);
        dispatch({ type: "NOTE_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// editNote action creator TODO: fill in logic
export const editNote = editedNote => {
  return dispatch => {
    axios
      .put(`http://localhost:5500/api/edit/${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: "NOTE_EDITED", payload: [editedNote] });
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// deleteNote action creator TODO: fill in logic
export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:5500/api/delete/${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};
