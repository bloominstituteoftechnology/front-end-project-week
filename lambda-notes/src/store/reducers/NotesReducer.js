//Actions
import { 
	CREATE_NOTE,
	DELETE_NOTE, 

	EDITTING_NOTE, 
	EDITTING_NOTE_COMPLETE, 
	EDITTING_NOTE_ERROR, 

	GETTING_KILLER_NOTES, 
	GETTING_KILLER_NOTES_COMPLETE, 
	GETTING_KILLER_NOTES_ERROR, 
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
			return { ...state, notes: action.payload, errorMsg: '' };
		}

		// CREATING_NOTE
		case CREATE_NOTE: {
			const newNotes = [ ...state.notes ];
			newNotes.push(action.payload);

			return { ...state, notes: newNotes };
		}

		// EDITTING_NOTE
		case EDITTING_NOTE: {
			return state;
		}

		case EDITTING_NOTE_COMPLETE: {
			return { ...state, notes: [ ...state.notes ], errorMsg: '' };
		}

		// DELETING_NOTE
		case DELETE_NOTE: {
			return { ...state, notes: state.notes.filter((note, i) => i !== action.payload) };
		}

		// ERRORS
		case EDITTING_NOTE_ERROR:
		case GETTING_KILLER_NOTES_ERROR: {
			return { ...state, notes: [ ...state.notes ], errorMsg: action.payload + '' };
		}

		default:
		return state;
	}
}
