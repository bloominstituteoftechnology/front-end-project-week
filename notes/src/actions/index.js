import thunk from 'redux-thunk';
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const ERROR = 'ERROR';

export const getNotes = () => dispatch => {
	dispatch({ type: FETCHING });
	axios
		.get('https://fe-notes.herokuapp.com/note/get/all')
		.then(response => {
			dispatch({ type: FETCHED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'got an error' });
		});
};

export const saveNote = data => dispatch => {
	dispatch({ type: SAVING });
	console.log('action saveNote fired');
	axios
		.post('https://fe-notes.herokuapp.com/note/create', {
			tags: [''],
			title: data.title,
			textBody: data.textBody
		})
		.then(response => {
			console.log('server response' + response.data);
			dispatch({ type: SAVED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'saveNote got an error' });
		});
};
