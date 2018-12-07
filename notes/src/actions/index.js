import axios from "axios";

//Fetch Notes
export const FETCH_NOTES_START = "FETCH_NOTES_START";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

//Add Notes
export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

//Delete Notes
export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

//Edit Notes
export const EDIT_NOTE_START = "EDIT_NOTE_START";
export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE";

const URL = "https://fe-notes.herokuapp.com/note";

export const getNotes = () => dispatch => {
	dispatch({ type: FETCH_NOTES_START });
	axios
		.get(`${URL}/get/all`)
		.then(response => {
			console.log("Fetch succeeded", response);
			dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
		})
		.catch(err => {
			console.log("Fetch failed", err);
			dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
		});
};

export const addNote = note => dispatch => {
	dispatch({ type: ADD_NOTE_START });
	axios
		.post(`${URL}/create`, note)
		.then(response => {
			console.log("Add succeeded", response);
			dispatch({
				type: ADD_NOTE_SUCCESS
            });
		})
		.catch(err => {
			console.log("Add Failed", err);
			dispatch({ type: ADD_NOTE_FAILURE, payload: err });
		});
};

export const deleteNote = id => dispatch => {
	dispatch({ type: DELETE_NOTE_START });
	axios
		.delete(`${URL}/delete/${id}`)
		.then(responce => {
			console.log("Deleted succeeded", responce);
			dispatch({
				type: DELETE_NOTE_SUCCESS,
			});
		})
		.catch(err => {
			console.log("Delete failed", err);
			dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
		});
};

export const editNote = (id, payload) => dispatch => {
	dispatch({ type: EDIT_NOTE_START });
	axios
		.put(`${URL}/edit/${id}`, payload)
		.then(responce => {
			console.log("Edit succeeded", responce);
			dispatch({
				type: EDIT_NOTE_SUCCESS,
			});
		})
		.catch(err => {
			console.log("Edit failed", err);
			dispatch({ type: EDIT_NOTE_FAILURE, payload: err });
		});
};
