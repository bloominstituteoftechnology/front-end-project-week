import React from "react";
import { connect } from "react-redux";
// filter types
import { VisibilityFilters } from "../actions/index.js";
// components
import Todos from "./Todos";

// container component that will filter todos in redux store according to different filters
// pass filtered todos list to Todos which will render the list
const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		// no filter applied
		case "":
		case VisibilityFilters.SHOW_ALL_TODOS:
			return todos;
		// only render finished tasks (isComplete: true)
		case VisibilityFilters.SHOW_COMPLETED_TODOS:
			return todos.filter(todo => {
				return todo.isComplete;
			});
		// only return unfinished tasks (isComplete: false)
		case VisibilityFilters.SHOW_ACTIVE_TODOS:
			return todos.filter(todo => {
				return !todo.isComplete;
			});
		default:
			throw new Error("Unknown filter: " + filter);
	}
};

const mapStateToProps = state => {
	console.log("Container STATE: ", state);
	console.log(getVisibleTodos(state.todos, state.filter));
	// filtered todos go here
	return {
		todos: getVisibleTodos(state.todos, state.filter)
	};
};

const VisibilityTodos = connect(mapStateToProps)(Todos);

export default VisibilityTodos;
