import { ADD_NOTE, GET_NOTES } from "../components/actions/actions";

const initialState = {
	notes: []
};

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTES:
			return { ...state, notes: action.payload };
		case ADD_NOTE:
			return { ...state, notes: [...state.notes, action.payload] };

		default:
			return state;
	}
};
