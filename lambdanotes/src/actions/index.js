import axios from 'axios';

// getNotes
export const GETTING_NOTES = 'GETTING_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
// getNote
export const GETTING_NOTE = 'GETTING_NOTE';
export const GOT_NOTE = 'GOT_NOTE';
export const GET_NOTE_ERROR = 'GET_NOTE_ERROR';
//addNote
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';
// deleteNote
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';
// editNote
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const UPDATE_NOTE_ERROR = 'UPDATE_NOTE_ERROR';
// redirect
export const SET_REDIRECT = 'SET_REDIRECT';
export const RESET_REDIRECT = 'RESET_REDIRECT';

// Loading message tester
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const port = 5000;

// get notes
export const getNotes = () => {
	return dispatch => {
		dispatch({ type: GETTING_NOTES });

		axios
			// .get('https://killer-notes.herokuapp.com/note/get/all')
			.get(
				`${process.env.REACT_APP_DB || `http://localhost:${port}`}/api/notes`
			)

			.then(async ({ data }) => {
				await sleep(1000);
				dispatch({ type: GOT_NOTES, payload: data });
			})

			.catch(error => dispatch({ type: GET_NOTES_ERROR, payload: error }));
	};
};

// get note by id
export const getNote = id => {
	return dispatch => {
		dispatch({ type: GETTING_NOTE });

		axios
			// .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
			.get(
				`${process.env.REACT_APP_DB ||
					`http://localhost:${port}`}/api/notes/${id}`
			)

			.then(async ({ data }) => {
				await sleep(1000);
				dispatch({ type: GOT_NOTE, payload: data });
			})

			.catch(error => dispatch({ type: GET_NOTE_ERROR, payload: error }));
	};
};

// add note
export const addNote = note => {
	return dispatch => {
		dispatch({ type: ADDING_NOTE });

		axios
			// .post('https://killer-notes.herokuapp.com/note/create', note)
			.post(
				`${process.env.REACT_APP_DB || `http://localhost:${port}`}/api/notes/`,
				note
			)

			.then(async () => {
				await sleep(1000);
				dispatch({ type: ADDED_NOTE });
			})

			.catch(error => dispatch({ type: ADD_NOTE_ERROR, payload: error }));
	};
};

// delete note
export const deleteNote = id => {
	return dispatch => {
		dispatch({ type: DELETING_NOTE });

		axios
			// .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
			.delete(
				`${process.env.REACT_APP_DB ||
					`http://localhost:${port}`}/api/notes/${id}`
			)

			.then(async () => {
				await sleep(1000);
				dispatch({ type: DELETED_NOTE, payload: {} });
				dispatch({ type: SET_REDIRECT, payload: '/' });
			})

			.catch(error => dispatch({ type: DELETE_NOTE_ERROR, payload: error }));
	};
};

// update note
export const updateNote = (id, changes) => {
	return dispatch => {
		dispatch({ type: UPDATING_NOTE });

		axios
			// .put(
			// 	`https://killer-notes.herokuapp.com/note/edit/${updatedNote._id}`,
			// 	updatedNote
			// )
			.put(
				`${process.env.REACT_APP_DB ||
					`http://localhost:${port}`}/api/notes/${id}`,
				changes
			)

			.then(async ({ data }) => {
				await sleep(1000);
				dispatch({ type: UPDATED_NOTE, payload: data });
			})

			.catch(error => dispatch({ type: UPDATE_NOTE_ERROR, payload: error }));
	};
};

// redirect
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
