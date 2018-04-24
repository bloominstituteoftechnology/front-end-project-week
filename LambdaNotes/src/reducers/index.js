// action types
import {
	ADDTODO,
	DELETETODO,
	UPDATETODO,
	TOGGLETODO
} from "../actions/index.js";

const initialState = {
	todos: [
		{ title: "first", text: "first todo item", isComplete: false },
		{ title: "second", text: "second item", isComplete: false },
		{ title: "third", text: "third item", isComplete: false },
		{ title: "fourth", text: "fourth item", isComplete: false },
		{ title: "fifth", text: "fifth item", isComplete: false },
		{ title: "sixth", text: "sixth item", isComplete: false }
	],
	addingTodo: false,
	updatingTodo: false,
	deletingTodo: false,
	viewingTodo: false
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// add new todo
		case ADDTODO:
			return Object.assign({}, state, {
				// append new todo objects to the list
				todos: [...state.todos, action.payload]
			});
		// edit new todo
		case UPDATETODO:
			let updatedTodos = state.todos.map((todo, index) => {
				if (index === action.payload.index) {
					// only change the text of a todo if its index matches
					todo.text = action.payload.text;
				}
			});
			return Object.assign({}, state, {
				todos: updatedTodos
			});
		// delete new todo
		case DELETETODO:
			return Object.assign({}, state, {
				todos: state.todos.filter((todo, index) => {
					// return todos that don't match the target's index
					return index !== action.payload;
				})
			});
		default:
			return state;
	}
};

export default rootReducer;
