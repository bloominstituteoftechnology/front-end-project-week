import { SAVING, SAVED, ERROR, FETCHING, FETCHED } from '../actions';
const initialState = {
	savingNote: false,
	notes: [],
	fetchingNote: false
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
			});

			return { ...state, notes: action.payload.data, savingNote: false };
		default:
			return state;
	}
};
export default NotesReducer;
