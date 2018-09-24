import { ADD_NOTE, GET_NOTES } from "../components/actions/actions";

const initialState = {
	notes: [
		{
			title: "hey",
			body: "nah"
		}
	]
};

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTES:
			console.log(action.payload);
			return { ...state, notes: action.payload };
		case ADD_NOTE:
			console.log(action.payload);
			return { ...state, notes: [...state.notes, action.payload] };
		default:
			return state;
	}
};
