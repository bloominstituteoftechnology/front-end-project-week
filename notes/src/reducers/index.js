import {
	SAVING,
	SAVED,
	ERROR,
	FETCHING,
	FETCHED,
	FETCHINGNOTE,
	FETCHEDNOTE,
	UPDATING,
	UPDATED,
	DELETING,
	DELETED,
	DIDNTDELETE
} from '../actions';
const initialState = {
	updating: false,
	updated: false,
	error: null,
	savingNote: false,
	notes: [],
	fetchingNote: false,
	fetchingNotes: false,
	deleting: false,
	currentIndividual: {
		_id: '',
		title: '',
		textBody: ''
	}
};
const NotesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return { ...state, fetchingNote: true };
		case FETCHED:
			return { ...state, fetchingNote: false, notes: action.payload };
		case SAVING:
			return { ...state, savingNote: true };
		case SAVED:
			action.payload.forEach(item => {
				console.log('payload thingy:' + item);
				return { ...state, notes: action.payload.data, savingNote: false };
			});
		case FETCHINGNOTE:
			return { ...state, fetchingNote: true };
		case FETCHEDNOTE:
			return {
				...state,
				fetchingNote: false,
				currentIndividual: {
					_id: action.payload._id,
					title: action.payload.title,
					textBody: action.payload.textBody
				}
			};
		case UPDATING:
			return { ...state, updating: true };
		case UPDATED:
			let newNotes = state.notes.slice();
			console.log('newNotes=' + newNotes);
			newNotes.map(note => {
				if (note._id === action.payload._id) {
					return action.payload._id;
				}
				return note;
			});
			return {
				...state,
				updating: false,
				updated: true,
				currentIndividual: {
					_id: '',
					title: '',
					textBody: ''
				},
				notes: newNotes
			};
		case DELETING:
			return { ...state, deleting: true };
		case ERROR:
			return { ...state, error: action.message };
		case DELETED:
			let afterDeleted = state.notes
				.slice()
				.filter(note => note._id !== action.payload);
			return { ...state, deleting: false, notes: afterDeleted };
		case DIDNTDELETE:
			console.log('didntdeletefiredatleast');
			return { ...state, deleting: false };
		default:
			return state;
	}
};
export default NotesReducer;
