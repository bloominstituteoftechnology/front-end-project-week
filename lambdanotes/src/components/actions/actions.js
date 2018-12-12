export const ADD_NOTE = "ADD_NOTE";
export const GET_NOTES = "GET_NOTES";

export const getNotes = notes => {
	return { type: GET_NOTES, payload: notes };
};

export const addNote = note => {
	return { type: ADD_NOTE, payload: note };
};
