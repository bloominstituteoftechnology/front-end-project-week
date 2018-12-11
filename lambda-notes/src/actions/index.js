import axios from "axios";

export const GETTING_NOTES = "GETTING_NOTES";
export const NOTES_GOT = "NOTES_GOT";
export const FAILURE = "FAILURE";
export const ADDING_NOTE = "ADDING_NOTE";
export const NOTE_ADDED = "NOTE_ADDED";
export const DELETING_NOTE = "DELETING_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const EDITING_NOTE = "EDITING_NOTE";
export const NOTE_EDITED = "NOTE_EDITED";
export const TOGGLE_DELETED = "TOGGLE_DELETED";
export const TOGGLE_ADDED = "TOGGLE_ADDED";
export const SORT_BY_TITLE = "SORT_BY_TITLE";

const URL = "https://backend-project-week-lambda.herokuapp.com/api/notes";

export const fetchNotes = () => dispatch => {
  dispatch({ type: GETTING_NOTES });
  axios
    .get(URL)
    .then(({ data }) => dispatch({ type: NOTES_GOT, payload: data }))
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const notePost = note => dispatch => {
  dispatch({ type: ADDING_NOTE });
  axios
    .post(URL, note)
    .then(data =>
      dispatch({
        type: NOTE_ADDED,
        payload: { ...data.config.data, id: data.data.success }
      })
    )
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETING_NOTE });
  axios.delete(`${URL}/${id}`).then(({ data }) => {
    dispatch({ type: NOTE_DELETED, payload: data });
  });
};

export const editNote = (id, newNote) => dispatch => {
  dispatch({ type: EDITING_NOTE });
  axios.put(`${URL}/${id}`, newNote).then(dispatch({ type: NOTE_EDITED }));
};

export const toggleDeleted = () => {
  return { type: TOGGLE_DELETED };
};

export const toggleAdded = () => {
  return { type: TOGGLE_ADDED };
};

export const alphaSort = () => {
  return { type: SORT_BY_TITLE };
};
