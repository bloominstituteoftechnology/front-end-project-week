// Dependencies
import axios from 'axios';

// Actions
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';


export const GETTING_KILLER_NOTES = 'GETTING_KILLER_NOTES';
export const GETTING_KILLER_NOTES_COMPLETE = 'GETTING_KILLER_NOTES_COMPLETE';
export const GETTING_KILLER_NOTES_ERROR = 'GETTING_KILLER_NOTES_ERROR';

export const createNote = note => {
	return { type: CREATE_NOTE, payload: note };
}

export const deleteNote = id => {
	return { type: DELETE_NOTE, payload: id };
}

export const editNote = (note, id) => {
	return { type: EDIT_NOTE, payload: { note: note, id: id } };
}

export const getKillerNotes = () => dispatch => {
	dispatch({ type: GETTING_KILLER_NOTES });

	axios
		.get('https://killer-notes.herokuapp.com/note/get/all')
		.then(res => dispatch({ type: GETTING_KILLER_NOTES_COMPLETE, payload: res.data }))
		.catch(err => {
			console.log(err);
			dispatch({ type: GETTING_KILLER_NOTES_ERROR, payload: err });
		})
}
