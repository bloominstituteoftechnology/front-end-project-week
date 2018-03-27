import { FETCHED, FETCHING, ERROR, FETCH_NOTE } from "../actions";

const initialState = {
	notes: [],
	note: null,
	fetching: false
};

export const NotesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetching: true
			};
		case ERROR:
			return {
				...state,
				error: action.message
			};
		case FETCH_NOTE:
		return {
			...state,
			note: Response.data,
		}
		case FETCHED:
			return {
				...state,
				notes: action.notes,
				fetching: false,
				error: null
			};
		default:
			return state;
	}
};
