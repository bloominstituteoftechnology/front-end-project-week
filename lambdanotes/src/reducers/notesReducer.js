import {
	GETTING_NOTES,
	GOT_NOTES,
	GET_NOTES_ERROR,
	GETTING_NOTE,
	GOT_NOTE,
	GET_NOTE_ERROR,
	ADDING_NOTE,
	ADDED_NOTE,
	ADD_NOTE_ERROR,
	DELETING_NOTE,
	DELETED_NOTE,
	DELETE_NOTE_ERROR,
	UPDATING_NOTE,
	UPDATED_NOTE,
	UPDATE_NOTE_ERROR
} from '../actions';

const initialState = {
	notes: [],
	note: {},
	gettingNotes: false,
	gettingNote: false,
	addingNote: false,
	deletingNote: false,
	updatingNote: false,
	error: null
};

const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		// getNotes
		case GETTING_NOTES:
			return { ...state, gettingNotes: true };

		case GOT_NOTES:
			return {
				...state,
				notes: action.payload,
				gettingNotes: false
			};

		case GET_NOTES_ERROR:
			return {
				...state,
				gettingNotes: false,
				error: `${action.payload}`
			};

		// getNote
		case GETTING_NOTE:
			return { ...state, gettingNote: true };

		case GOT_NOTE:
			return {
				...state,
				note: action.payload,
				gettingNote: false
			};

		case GET_NOTE_ERROR:
			return {
				...state,
				gettingNote: false,
				error: `${action.payload}`
			};

		// addNote
		case ADDING_NOTE:
			return { ...state, addingNote: true };

		case ADDED_NOTE:
			return {
				...state,
				// notes: action.payload,
				addingNote: false
			};

		case ADD_NOTE_ERROR:
			return {
				...state,
				addingNote: false,
				error: `${action.payload}`
			};

		// deleteNote
		case DELETING_NOTE:
			return { ...state, deletingNote: true };

		case DELETED_NOTE:
			return {
				...state,
				// notes: action.payload,
				deletingNote: false
			};

		case DELETE_NOTE_ERROR:
			return {
				...state,
				deletingNote: false,
				error: `${action.payload}`
			};

		// updateNote
		case UPDATING_NOTE:
			return { ...state, updatingNote: true };

		case UPDATED_NOTE:
			return {
				...state,
				notes: action.payload,
				updatingNote: false
			};

		case UPDATE_NOTE_ERROR:
			return {
				...state,
				updatingNote: false,
				error: `${action.payload}`
			};

		default:
			return state;
	}
};

export default noteReducer;
