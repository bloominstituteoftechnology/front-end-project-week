// action types
export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const UPDATETODO = "UPDATETODO";
export const TOGGLETODO = "TOGGLETODO";

// from node-uuid
let uuid = require("uuid-v4");

// action creators
export function addTodo(title, text) {
	return {
		type: ADDTODO,
		payload: { title: title, text: text, isComplete: false, id: uuid() }
	};
}

export function toggleTodo(index) {
	return {
		type: TOGGLETODO,
		payload: index
	};
}

export function deleteTodo(index) {
	return {
		type: DELETETODO,
		payload: index
	};
}

export function updateTodo(index, title, text) {
	return {
		type: UPDATETODO,
		payload: {
			title: title,
			text: text,
			index: index
		}
	};
}
