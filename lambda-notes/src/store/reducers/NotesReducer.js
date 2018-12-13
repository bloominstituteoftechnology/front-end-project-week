//Actions
import { 
	GETTING_NOTES,
	GETTING_NOTES_COMPLETE,
	GETTING_NOTES_ERROR,

	CREATING_NOTE,
	CREATING_NOTE_COMPLETE,
	CREATING_NOTE_ERROR,

	EDITTING_NOTE,
	EDITTING_NOTE_COMPLETE,
	EDITTING_NOTE_ERROR,

	DELETING_NOTE,
	DELETING_NOTE_COMPLETE,
	DELETING_NOTE_ERROR,

	DELETING_ALL,
	DELETING_ALL_COMPLETE,
	DELETING_ALL_ERROR,
} from '../actions';

// Initial State
const initialState = {
	notes: [{
		title: '',
		content: '',
	}],
	errorMsg: '',
};

export const NotesReducer = (state = initialState, action) => {
	switch(action.type) {
		case GETTING_NOTES:
		case CREATING_NOTE:
		case EDITTING_NOTE:
		case DELETING_NOTE:
		case DELETING_ALL:
			return state;

		case GETTING_NOTES_COMPLETE: {
			return { 
				...state, 
				notes: action.payload, 
				errorMsg: '', 
			};
		}

		case CREATING_NOTE_COMPLETE: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: '', 
			};
		}

		case EDITTING_NOTE_COMPLETE: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: '', 
			};
		}

		case DELETING_ALL_COMPLETE:
		case DELETING_NOTE_COMPLETE: {
			return { 
				...state, 
				notes: [ ...state.notes ], 
				errorMsg: '', 
			};
		}

		// ERRORS
		case DELETING_ALL_ERROR:
		case DELETING_NOTE_ERROR:
		case EDITTING_NOTE_ERROR:
		case CREATING_NOTE_ERROR:
		case GETTING_NOTES_ERROR: {
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
