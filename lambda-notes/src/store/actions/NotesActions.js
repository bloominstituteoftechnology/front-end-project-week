// Dependencies
import axios from 'axios';

// Actions
export const GETTING_KILLER_NOTES = 'GETTING_KILLER_NOTES';
export const GETTING_KILLER_NOTES_COMPLETE = 'GETTING_KILLER_NOTES_COMPLETE';
export const GETTING_KILLER_NOTES_ERROR = 'GETTING_KILLER_NOTES_ERROR';

export const CREATE_NOTE = 'CREATE_NOTE';

export const EDITTING_NOTE = 'EDITTING_NOTE';
export const EDITTING_NOTE_COMPLETE = 'EDITTING_NOTE_COMPLETE';
export const EDITTING_NOTE_ERROR = 'EDITTING_NOTE_ERROR';

export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = note => {
	return { type: CREATE_NOTE, payload: note };
}

export const deleteNote = id => {
	return { type: DELETE_NOTE, payload: id };
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

export const editNote = (note, id, history) => dispatch => {
	dispatch({ type: EDITTING_NOTE });

	axios
		.put(`https://killer-notes.herokuapp.com/note/edit/${ id }`, note)
		.then(res => {
			dispatch({ type: EDITTING_NOTE_COMPLETE })
		})
		.then(() => getKillerNotes()(dispatch))
		.then(() => history.push('/'))
		.catch(err => {
			console.log(err);
			dispatch({ type: EDITTING_NOTE_ERROR, payload: err });
		})
}
