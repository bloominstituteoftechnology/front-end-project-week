import {
	FETCH_NOTES_START,
	FETCH_NOTES_SUCCESS,
	FETCH_NOTES_FAILURE,
	ADD_NOTE_START,
	ADD_NOTE_SUCCESS,
	ADD_NOTE_FAILURE,
	ADD_STATE_NOTE,
	RESET_NEWNOTEID,
	DELETE_NOTE_START,
	DELETE_NOTE_SUCCESS,
	DELETE_NOTE_FAILURE,
	DELETE_STATE_NOTE,
	EDIT_NOTE_START,
	EDIT_NOTE_SUCCESS,
	EDIT_NOTE_FAILURE,
	EDIT_STATE_NOTE
} from "../actions";

const initialState = {
	fetchingNotes: false,
	savingNote: false,
	deletingNote: false,
	editingNote: false,
	newNoteId: "",
	notes: [],
	error: null
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTES_START:
			return {
				...state,
				fetchingNotes: true
			};
		case FETCH_NOTES_SUCCESS:
			return {
				...state,
				error: null,
				fetchingNotes: false,
				notes: action.payload
			};
		case FETCH_NOTES_FAILURE:
			return {
				...state,
				error: action.payload,
				fetchingNotes: false
			};

		case ADD_NOTE_START:
			return {
				...state,
				savingNote: true
			};
		case ADD_NOTE_SUCCESS:
			return {
				...state,
				savingNote: false,
				newNoteId: action.payload
			};
		case ADD_NOTE_FAILURE:
			return {
				...state,
				savingNote: false,
				error: action.payload
			};
		case ADD_STATE_NOTE:
			return {
				...state,
				notes: [...state.notes, action.payload]
			};
		case RESET_NEWNOTEID:
			return {
				...state,
				notes: [
					...state.notes.map(note => {
						if (note._id === "new-note") note._id = state.newNoteId;
						return note;
					})
				],
				newNoteId: ""
			};

		case DELETE_NOTE_START:
			return {
				...state,
				deletingNote: true
			};
		case DELETE_NOTE_SUCCESS:
			return {
				...state,
				deletingNote: false
			};
		case DELETE_NOTE_FAILURE:
			return {
				...state,
				deletingNote: false,
				error: action.payload
			};
		case DELETE_STATE_NOTE:
			return {
				...state,
				notes: state.notes.filter(note => note._id !== action.payload)
			};

		case EDIT_NOTE_START:
			return {
				...state,
				editingNote: true
			};
		case EDIT_NOTE_SUCCESS:
			return {
				...state,
				editingNote: false
			};
		case EDIT_NOTE_FAILURE:
			return {
				...state,
				editingNote: false,
				error: action.payload
			};
		case EDIT_STATE_NOTE:
			return {
				...state,
				notes: state.notes.map(note => {
					if (note._id === action.payload._id) return action.payload;
					return note;
				})
			};

		default:
			return state;
	}
};

export default notesReducer;
