import thunk from 'redux-thunk';
import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHINGNOTE = 'FETCHNOTE';
export const FETCHEDNOTE = 'FETCHEDNOTE';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const ERROR = 'ERROR';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const DIDNTDELETE = 'DIDNTDELETE';

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

export const getIndividual = data => dispatch => {
	dispatch({ type: FETCHINGNOTE });
	console.log('url is' + data);
	axios
		.get(`https://fe-notes.herokuapp.com/note/get/${data}`)
		.then(response => {
			dispatch({ type: FETCHEDNOTE, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'got an error in getIndividual' });
		});
};

export const editNote = data => dispatch => {
	dispatch({ type: UPDATING });
	axios
		.put(`https://fe-notes.herokuapp.com/note/edit/${data._id}`, {
			title: data.title,
			_id: data._id,
			textBody: data.textBody
		})
		.then(response => {
			console.log('response to put is =' + response);
			dispatch({ type: UPDATED, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: ERROR, message: 'got an error in editNote' });
		});
};

export const deleting = data => dispatch => {
	dispatch({ type: DELETING });
};

export const deleted = data => dispatch => {
	axios
		.delete(
			`
https://fe-notes.herokuapp.com/note/delete/${data}`
		)
		.then(response => {
			dispatch({ type: DELETED, payload: data });
		})

		.catch(err => {
			dispatch({ type: ERROR, message: 'delete got an error' });
		});
};

export const didntDelete = data => dispatch => {
	console.log('DIDNT DELETE ACTION FIRED');
	dispatch({ type: DIDNTDELETE });
};
