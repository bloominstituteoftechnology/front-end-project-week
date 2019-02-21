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
			return Object.assign({}, state, { fetchingNotes: true });
		case FETCHED:
			const newState = Object.assign({}, state, {
				fetchingNotes: false,
				notes: action.payload
			});

			return newState;
		case SAVING:
			return Object.assign({}, state, { savingNote: true });
		case SAVED:
			console.log('payload' + JSON.stringify(action.payload));
			let addedNotes = state.notes.slice();
			newNotes.push(action.payload);
			return Object.assign({}, state, { notes: addedNotes });

		case FETCHINGNOTE:
			return Object.assign({}, state, { fetchingNote: true });
		case FETCHEDNOTE:
			return Object.assign({}, state, {
				fetchingNote: false,
				currentIndividual: {
					_id: action.payload._id,
					title: action.payload.title,
					textBody: action.payload.textBody
				}
			});

		case UPDATING:
			return Object.assign({}, state, { updating: true });
		case UPDATED:
			let newNotes = state.notes.slice();
			console.log('newNotes=' + newNotes);
			newNotes.map(note => {
				if (note._id === action.payload._id) {
					return action.payload._id;
				}
				return note;
			});
			return Object.assign({}, state, {
				updating: false,
				updated: true,
				currentIndividual: {
					_id: '',
					title: '',
					textBody: ''
				},
				notes: newNotes
			});

		case DELETING:
			return Object.assign({}, state, { deleting: true });
		case ERROR:
			return Object.assign({}, state, { error: action.message });
		case DELETED:
			let afterDeleted = state.notes
				.slice()
				.filter(note => note._id !== action.payload);
			return Object.assign({}, state, { deleting: false, notes: afterDeleted });
		case DIDNTDELETE:
			console.log('didntdeletefiredatleast');
			return Object.assign({}, state, { deleting: false });
		default:
			return Object.assign({}, state);
	}
};
export default NotesReducer;
