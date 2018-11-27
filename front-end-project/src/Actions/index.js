import axios from 'axios';
export const GETTING = 'GETTING';
export const GET = 'GET';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const EDITING = 'EDITING';
export const EDITED = 'EDITED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

export const getNotes = () => {
	return (
		dispatch => {
			dispatch({ type: GETTING });
			axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
				.then(response => {
					dispatch({ type: GET, payload: response.data });
				})
				.catch(err => {
					dispatch({ type: ERROR, payload: err });
				})
		}
	);
};

export const addNote = note => {
  return (
    dispatch => {
      dispatch({ type: ADDING });
      axios.post(`https://fe-notes.herokuapp.com/note/create`, note)
        .then(response => {
          dispatch({ type: ADDED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const editNote = (id, note) => {
  return (
    dispatch => {
      dispatch({ type: EDITING });
      axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
        .then(response => {
          dispatch({ type: EDITED, payload: { id, ...response.data } });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const deleteNote = id => {
  return (
    dispatch => {
      dispatch({ type: DELETING });
      axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response => {
          dispatch({ type: DELETED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}
