// action types
import {
	ADDTODO,
	DELETETODO,
	UPDATETODO,
	TOGGLETODO,
	ARCHIVETODO,
	LISTIFYTODO
} from "../actions/index.js";

let uuid = require("uuid-v4");

const initialState = {
	todos: [
		{
			title: "Do Dishes",
			text: "do dishes before going to bed",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		},
		{
			title: "Walk Dog",
			text: "walk the dog after dinner",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		},
		{
			title: "Clean Room",
			text: "vacuum carpet and clean up toys",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		},
		{
			title: "Groceries",
			text: "get some milk and cereal",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		},
		{
			title: "Dinner with Max",
			text: "meet Max in downtown for dinner at 7",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		},
		{
			title: "Fix bike",
			text: "replace flat tire",
			isComplete: false,
			id: uuid(),
			archive: false,
			listify: false
		}
	],
	status: "",
	filter: ""
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
			state.todos[parseInt(action.payload.id, 10)].title = action.payload.title;
			state.todos[parseInt(action.payload.id, 10)].text = action.payload.text;
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
		// change a todo's completion status
		case TOGGLETODO:
			console.log("ACTION.PAYLOAD: ", action.payload);
			return Object.assign({}, state, {
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return Object.assign({}, todo, {
							isComplete: !todo.isComplete
						});
					}
					return todo;
				}),
				status: "TOGGLED A TODO"
			});
		case ARCHIVETODO:
			return Object.assign({}, state, {
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return Object.assign({}, todo, {
							archive: !todo.archive
						});
					}
					return todo;
				}),
				status: "ARCHIVED A TODO"
			});
		case LISTIFYTODO:
			return Object.assign({}, state, {
				// change text to an array of strings
				// each string represents one line of text in a todo
				// strings are split by newline chars /n
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return Object.assign({}, todo, {
							listify: !todo.listify,
							text: todo.text.split("\n")
						});
					}
					return todo;
				}),
				status: "LISTIFIED A TODO"
			});
		// change filter status of the app
		case "SET_VISIBILITY_FILTER":
			return Object.assign({}, state, {
				filter: action.payload
			});
		default:
			return state;
	}
};

export default rootReducer;
