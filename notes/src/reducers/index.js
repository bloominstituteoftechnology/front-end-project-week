import {
	SAVING,
	SAVED,
	ERROR,
	FETCHING,
	FETCHED,
	FETCHINGNOTE,
	FETCHEDNOTE
} from '../actions';
const initialState = {
	savingNote: false,
	notes: [],
	fetchingNote: false,
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

		default:
			return state;
	}
};
export default NotesReducer;
