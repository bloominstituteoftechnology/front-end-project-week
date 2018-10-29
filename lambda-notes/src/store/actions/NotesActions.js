// Dependencies
import axios from 'axios';

// Actions
export const GETTING_NOTES = 'GETTING_NOTES';
export const GETTING_NOTES_COMPLETE = 'GETTING_NOTES_COMPLETE';
export const GETTING_NOTES_ERROR = 'GETTING_NOTES_ERROR';

export const CREATING_NOTE = 'CREATING_NOTE';
export const CREATING_NOTE_COMPLETE = 'CREATING_NOTE_COMPLETE';
export const CREATING_NOTE_ERROR = 'CREATING_NOTE_ERROR';

export const EDITTING_NOTE = 'EDITTING_NOTE';
export const EDITTING_NOTE_COMPLETE = 'EDITTING_NOTE_COMPLETE';
export const EDITTING_NOTE_ERROR = 'EDITTING_NOTE_ERROR';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETING_NOTE_COMPLETE = 'DELETING_NOTE_COMPLETE';
export const DELETING_NOTE_ERROR = 'DELETING_NOTE_ERROR';

export const DELETING_ALL = 'DELETING_ALL';
export const DELETING_ALL_COMPLETE = 'DELETING_ALL_COMPLETE';
export const DELETING_ALL_ERROR = 'DELETING_ALL_ERROR';

// back end URL
const URL = 'http://localhost:5000/notes';

export const getNotes = () => dispatch => {
	dispatch({ 
		type: GETTING_NOTES,
	});

	axios
		.get(URL)
		.then(res => dispatch({ 
			type: GETTING_NOTES_COMPLETE,
			payload: res.data,
		}))
		.catch(err => {
			console.log(err);
			dispatch({ 
				type: GETTING_NOTES_ERROR,
				payload: err,
			});
		})
};

export const createNote = (note, history) => dispatch => {
	dispatch({
		type: CREATING_NOTE,
	});

	axios
		.post(URL, note)
		.then(res => dispatch({
			type: CREATING_NOTE_COMPLETE,
		}))
		.then(() => getNotes()(dispatch))
		.then(() => history.push('/list'))
		.catch(err => {
			console.log(err);
			dispatch({
				type: CREATING_NOTE_ERROR,
				payload: err,
			});
		})
};

export const editNote = (note, id, history) => dispatch => {
	dispatch({ 
		type: EDITTING_NOTE,
	});

	axios
		.put(`${URL}/${ id }`, note)
		.then(res => {
			dispatch({ 
				type: EDITTING_NOTE_COMPLETE,
			});
		})
		.then(() => getNotes()(dispatch))
		.then(() => history.push('/list'))
		.catch(err => {
			console.log(err);
			dispatch({ 
				type: EDITTING_NOTE_ERROR,
				payload: err,
			});
		})
};

export const deleteNote = (id, history) => dispatch => {
	dispatch({
		type: DELETING_NOTE,
	});

	axios
		.delete(`${URL}/${ id }`)
		.then(res => {
			dispatch({
				type: DELETING_NOTE_COMPLETE,
			});
		})
		.then(() => getNotes()(dispatch))
		.then(() => history.push('/list'))
		.catch(err => {
			console.log(err);
			dispatch({
				type: DELETING_NOTE_ERROR,
				payload: err,
			});
		})
};

export const deleteAll = (allIds, history) => dispatch => {
	dispatch({
		type: DELETING_ALL,
	});

	for (let i = 0; i < allIds.length - 1; i++) {
		axios
			.delete(`${ URL }/${ allIds[i] }`);
	}
	axios
		.delete(`${ URL }/${ allIds[allIds.length - 1] }`)
		.then(res => {
			dispatch({
				type: DELETING_ALL_COMPLETE,
			});
		})
		.then(() => getNotes()(dispatch))
		.then(() => history.push('/'))
		.catch(err => {
			console.log(err);
			dispatch({
				type: DELETING_ALL_ERROR,
				payload: err,
			});
		})
};
