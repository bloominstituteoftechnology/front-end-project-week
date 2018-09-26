import axios from "axios";

export const DELETE_NOTE = "DELETE_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";

export const EDIT_NOTE = "EDIT_NOTE";
export const EDITING_NOTE = "EDITING_NOTE";

export const CREATE_NOTE = "CREATE_NOTE";
export const CREATING_NOTE = "CREATING_NOTE";

export const FETCH_NOTE = "FETCH_NOTE";
export const FETCHING_NOTE = "FETCHING_NOTE";

export const FETCH_NOTE_ID = "FETCH_NOTE_ID";
export const FETCHING_NOTE_ID = "FETCHING_NOTE_ID";

export const ERROR = "ERROR";

export const fetchNotes = () => {
  return dispatch => {
    // dispatch({ type: FETCHING_NOTE });
    axios
      .get(`http://localhost:5000/note/get/all`)
      .then(({ data }) => {
        dispatch({ type: FETCH_NOTE, payload: data });
      })
      .catch(err => {
        console.log("Error with fetching all notes actions: ", err);
        dispatch({ type: ERROR, err: err });
      });
  };
};

export const fetchNoteId = id => {
  return dispatch => {
    // dispatch({ type: FETCHING_NOTE_ID });
    axios
      .get(`http://localhost:5000/note/get/${id}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_NOTE_ID, payload: data._id });
      })
      .catch(err => {
        console.log("Error with fetching id: ", err);
        dispatch({ type: err });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:5000/note/delete/${id}`)
      .then(res => {
        dispatch({ type: DELETE_NOTE });
      })
      .catch(err => {
        console.log("Error with delete action: ", err);
        dispatch({ type: ERROR, err: err });
      });
  };
};

export const editNote = noteData => {
  return dispatch => {
    axios
      .put(`http://localhost:5000/note/edit/${noteData.id}`, noteData)
      .then(({ data }) => {
        return fetchNotes();
      })
      .catch(err => {
        console.log("Error with edit action: ", err);
        dispatch({ type: ERROR });
      });
  };
};

export const createNote = noteData => {
  return dispatch => {
    axios
      .post(`http://localhost:5000/note/create`, noteData)
      .then(res => {
        return fetchNotes();
      })
      .catch(err => {
        console.log("Error with create action: ", err);
        dispatch({ type: ERROR });
      });
  };
};
