// action types
const ADDTODO = "ADDTODO";
const DELETETODO = "DELETETODO";
const UPDATETODO = "UPDATETODO";
const TOGGLETODO = "TOGGLETODO";

// action creators
export function addTodo(text) {
	return {
		type: ADDTODO,
		payload: { text: text, isComplete: false }
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

export function updateTodo(index, text) {
	return {
		type: UPDATETODO,
		payload: {
			text: text,
			index: index
		}
	};
}
