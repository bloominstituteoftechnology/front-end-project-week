import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { deleteTodo, updateTodo } from "../actions/index";
import SingleTodo from "./SingleTodo";
// styles
import "../styles/SingleTodos.css";

// pass each todo its index
// pass each todo an edit handler from redux
// pass each todo a delete handler from redux
class Todos extends Component {
	constructor(props) {
		super(props);
	}
	// handleDeleteTodo = () => {

	// }

	// handleUpdateTodo = () => {

	// }

	render() {
		console.log("PROPS: ", this.props);
		return (
			<div className="container">
				{this.props.todos.map((todo, index) => {
					return <SingleTodo key={index} todo={todo} index={index} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("state: ", state);
	return {
		todos: state.todos,
		deletingTodo: state.deletingTodo,
		updatingTodo: state.updatingTodo
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	updateTodo
})(Todos);
