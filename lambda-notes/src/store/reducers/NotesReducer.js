//Actions
import { 
	GETTING_KILLER_NOTES, 
	GETTING_KILLER_NOTES_COMPLETE, 
	GETTING_KILLER_NOTES_ERROR, 

	CREATING_NOTE, 
	CREATING_NOTE_COMPLETE, 
	CREATING_NOTE_ERROR, 

	EDITTING_NOTE, 
	EDITTING_NOTE_COMPLETE, 
	EDITTING_NOTE_ERROR, 

	DELETE_NOTE, 
} from '../actions';

// Initial State
const initialState = {
	notes: [{
		title: '',
		textBody: '',
	}],
	errorMsg: '',
};

export const NotesReducer = (state = initialState, action) => {
	switch(action.type) {
		// GETTING_KILLER_NOTES
		case GETTING_KILLER_NOTES: {
			return state;
		}

		case GETTING_KILLER_NOTES_COMPLETE: {
			return { 
				...state, 
				notes: action.payload, 
				errorMsg: '', 
			};
		}

		// CREATING_NOTE
		case CREATING_NOTE: {
			return state;
		}

		case CREATING_NOTE_COMPLETE: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: '', 
			};
		}

		// EDITTING_NOTE
		case EDITTING_NOTE: {
			return state;
		}

		case EDITTING_NOTE_COMPLETE: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: '', 
			};
		}

		// DELETING_NOTE
		case DELETE_NOTE: {
			return { 
				...state, 
				notes: state.notes.filter((note, i) => i !== action.payload), 
			};
		}

		// ERRORS
		case EDITTING_NOTE_ERROR:
		case CREATING_NOTE_ERROR:
		case GETTING_KILLER_NOTES_ERROR: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: action.payload + '', 
			};
		}

		default:
		return state;
	}
}
