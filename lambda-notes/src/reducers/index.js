import { FETCHED, FETCHING, ERROR } from "../actions";
import { initialize } from "redux-form";

const initialState = {
	notes: [],
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
