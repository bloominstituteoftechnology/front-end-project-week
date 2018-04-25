// action types
import {
	ADDTODO,
	DELETETODO,
	UPDATETODO
	// TOGGLETODO
} from "../actions/index.js";

let uuid = require("uuid-v4");

const initialState = {
	todos: [
		{
			title: "Do Dishes",
			text: "do dishes before going to bed",
			isComplete: false,
			id: uuid()
		},
		{
			title: "Walk Dog",
			text: "walk the dog after dinner",
			isComplete: false,
			id: uuid()
		},
		{
			title: "Clean Room",
			text: "vacuum carpet and clean up toys",
			isComplete: false,
			id: uuid()
		},
		{
			title: "Groceries",
			text: "get some milk and cereal",
			isComplete: false,
			id: uuid()
		},
		{
			title: "Dinner with Max",
			text: "meet Max in downtown for dinner at 7",
			isComplete: false,
			id: uuid()
		},
		{
			title: "Fix bike",
			text: "replace flat tire",
			isComplete: false,
			id: uuid()
		}
	],
	status: ""
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// add new todo
		case ADDTODO:
			return Object.assign(
				{},
				state,
				{
					todos: [...state.todos, action.payload]
				},
				{ status: "ADDING NEW TODO" }
			);
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
