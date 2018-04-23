import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { deleteTodo, updateTodo } from "../actions/index";
import SingleTodo from "./SingleTodo";

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
			<div>
				{this.props.todos.map((todo, index) => {
					return (
						<Link to={`/todo/${index}`}>
							<SingleTodo key={index} todo={todo} index={index} />
						</Link>
					);
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
