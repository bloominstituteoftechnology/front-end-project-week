// action types
import {
	ADDTODO,
	DELETETODO,
	UPDATETODO
	// TOGGLETODO
} from "../actions/index.js";

const initialState = {
	todos: [
		{
			title: "Do Dishes",
			text: "do dishes before going to bed",
			isComplete: false
		},
		{ title: "Walk Dog", text: "walk the dog after dinner", isComplete: false },
		{
			title: "Clean Room",
			text: "vacuum carpet and clean up toys",
			isComplete: false
		},
		{ title: "Groceries", text: "get some milk and cereal", isComplete: false },
		{
			title: "Dinner with Max",
			text: "meet Max in downtown for dinner at 7",
			isComplete: false
		},
		{ title: "Fix bike", text: "replace flat tire", isComplete: false }
	],
	status: ""
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// add new todo
		case ADDTODO:
			return Object.assign({}, state, {
				todos: [...state.todos, action.payload],
				status: "ADDING NEW TODO"
			});
		// edit new todo
		case UPDATETODO:
			state.todos[action.payload.index].title = action.payload.title;
			state.todos[action.payload.index].text = action.payload.text;
			return Object.assign({}, state, {
				todos: state.todos,
				status: "UPDATING A TODO"
			});
		// delete new todo
		case DELETETODO:
			return Object.assign({}, state, {
				todos: state.todos.filter((todo, index) => {
					return index !== parseInt(action.payload, 10);
				}),
				status: "DELETING A TODO"
			});
		default:
			return state;
	}
};

export default rootReducer;
