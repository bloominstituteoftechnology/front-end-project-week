import axios from "axios";

export const GET_NOTES = "GET_NOTES";
export const FOUND_NOTES = "FOUND_NOTES";
export const ERROR = "ERROR";
export const DELETE = "DELETE";
export const CREATE_NOTE = "CREATE_NOTE";
export const SELECT_NOTE = "SELECT_NOTE";
export const FOUND_NOTE = "FOUND_NOTE";
export const GET_ALL = "GET_ALL";

export const getNotes = () => {
  return dispatch => {
    dispatch({
      type: GET_NOTES,
      payload: "Fetching your notes!"
    });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        dispatch({
          type: FOUND_NOTES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: "Could not retrieve notes."
        });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({
      type: DELETE,
      payload: "Deleting your note"
    });
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(() => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/all`)
          .then(response => {
            dispatch({
              type: GET_ALL,
              payload: response.data
            });
          })
          .catch(err => {
            dispatch({
              type: ERROR,
              payload: "Could not retrieve notes"
            });
          });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: "Could not delete note"
        });
      });
  };
};

export const selectNote = id => {
  return dispatch => {
    dispatch({
      type: SELECT_NOTE,
      payload: id
    });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        dispatch({
          type: FOUND_NOTE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: "Could not retrieve note."
        });
      });
  };
};

export const createNote = note => {
  return dispatch => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(response => {
        dispatch({
          type: CREATE_NOTE,
          payload: response.data.success
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: "Could not create note"
        });
      });
  };
};

//click handler to set id
//change handler to set state
//create note
//delete note
