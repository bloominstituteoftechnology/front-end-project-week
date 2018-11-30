import thunk from 'redux-thunk';

export const SAVING = 'SAVING';
export const SAVED = 'SAVED';

export const saveNote = data => dispatch => {
	dispatch({ type: SAVED, payload: data.note });
};
