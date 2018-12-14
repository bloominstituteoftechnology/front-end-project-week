import axios from 'axios';
export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const SORT = 'SORT';
export const SEARCH = 'SEARCH';

export const requestNotes = () => (dispatch) => {
	dispatch({ type: REQUEST_SENT });
	axios
		.get('https://fe-notes.herokuapp.com/note/get/all')
		.then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const addNote = (note) => (dispatch) => {
	dispatch({ type: ADD });
	axios
		.post(`https://fe-notes.herokuapp.com/note/create`, note)
		.then((response) => {
			dispatch({type: ADD, id: response.data.success})
			return axios.get('https://fe-notes.herokuapp.com/note/get/all');
		})
		.then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const editNote = (note, id) => (dispatch) => {
	dispatch({ type: UPDATE });
	console.log(note);
	axios
		.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
		.then((response) => {
			return axios.get('https://fe-notes.herokuapp.com/note/get/all');
		})
		.then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const deleteNote = (id) => (dispatch) => {
	dispatch({ type: DELETE });
	axios
		.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
		.then((response) => {
			return axios.get('https://fe-notes.herokuapp.com/note/get/all');
		})
		.then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
};

export const sorting = () => dispatch => {
	function compare(a, b) {
		const titleA = a.title.toUpperCase();
		const titleB = b.title.toUpperCase();
		let comparison = 0;
		if (titleA > titleB) {
			comparison = 1;
		} else if (titleA < titleB) {
			comparison = -1;
		}
		return comparison;
	}
	dispatch({type: SORT, payload: compare})
};

export const searching = (searchTerm) => dispatch => {
	if(searchTerm === '') {
		requestNotes();
	} else {
		dispatch({type: SEARCH, payload: searchTerm})
	}
	
}