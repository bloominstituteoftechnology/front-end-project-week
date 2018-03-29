import {
	FETCHED,
	FETCHING,
	ERROR,
	FETCHING_NOTE,
	FETCHED_NOTE,
	EDITING,
	EDITED,
} from "../actions";

const initialState = {
	notes: [],
	note: null,
	fetching: false,
	error: null
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
		case FETCHING_NOTE:
			return {
				...state,
				fetching: true
			};
		case FETCHED_NOTE:
			return {
				...state,
				note: action.note
			};
		case FETCHED:
			return {
				...state,
				notes: action.notes,
				fetching: false
			};
			case EDITING:
				return {
					...state,
				}
			case EDITED:
				return {
					...state,
					notes: action.notes
				}
		default:
			return state;
	}
};
