//Actions
import { 
	CREATE_NOTE,
	DELETE_NOTE, 
	EDIT_NOTE, 

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
};

export const NotesReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_NOTE: {
			const newNotes = [ ...state.notes ];
			newNotes.push(action.payload);

			return { ...state, notes: newNotes };
		}

		case DELETE_NOTE: {
			return { ...state, notes: state.notes.filter((note, i) => i !== action.payload) };
		}

		case EDIT_NOTE: {
			const newNotes = [ ...state.notes ];
			newNotes[action.payload.id] = action.payload.note;

			return { ...state, notes: newNotes };
		}

		case GETTING_KILLER_NOTES: {
			return state;
		}

		case GETTING_KILLER_NOTES_COMPLETE: {
			return { ...state, notes: action.payload };
		}

		default:
		return state;
	}
}
