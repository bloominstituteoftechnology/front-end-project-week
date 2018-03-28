import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';

export const ADDING = "ADDING";
export const ADDED = "ADDED";

export const DELETING = "DELETING";
export const DELETED = "DELETED";

export const EDITING = "EDITING";
export const EDITED = "EDITED";

export const getNotes = () => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`http://localhost:5000/api/friends`)
		.then((response) => {
			dispatch({ type: FETCHED, notes: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, message: "fetching error" });
		});
};
export const getNote = (id) => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`http://localhost:5000/api/friends/${id}`)
		.then((response) => {
			dispatch({ type: FETCHED_NOTE, note: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, message: "fetching error" });
		});
};
export const addNote = (note) => (dispatch) => {
	dispatch({ type: ADDING });
	axios
		.post(`http://localhost:5000/api/friends`, note)
		.then((response) => {
			dispatch({ type: ADDED, notes: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up adding note" });
		});
};

export const deleteNote = (id) => (dispatch) => {
	dispatch({ type: DELETING });
	axios
		.delete(`http://localhost:5000/api/friends/${id}`, id)
		.then((response) => {
			dispatch({ type: DELETED, notes: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up deleting note" });
		});
};

export const editNote = (id) => (dispatch) => {
	// const id = note.id;
	dispatch({ type: EDITING });
	axios
		.put(`http://localhost:5000/api/friends/${id}`, id)
		.then((response) => {
			dispatch({ type: EDITED, notes: response.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, errorMessage: "You f@#$ed up editing note" });
		});
};
