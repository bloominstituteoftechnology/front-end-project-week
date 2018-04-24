import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { deleteTodo, updateTodo } from "../actions/index";
import SingleTodo from "./SingleTodo";
// styles
import "../styles/SingleTodos.css";

class Todos extends Component {
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
