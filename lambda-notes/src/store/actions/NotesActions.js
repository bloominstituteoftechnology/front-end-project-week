// Actions
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const createNote = note => {
	return { type: CREATE_NOTE, payload: note };
}

export const deleteNote = id => {
	return { type: DELETE_NOTE, payload: id };
}

export const editNote = (note, id) => {
	return { type: EDIT_NOTE, payload: { note: note, id: id } };
}
