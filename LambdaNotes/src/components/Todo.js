import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { deleteTodo, updateTodo } from "../actions/index";
// material components
// styles

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: "",
			isComplete: ""
		};
	}
	render() {
		// console.log("Todo PROPS: ", this.props);
		return (
			// {this.props.todos.forEach((todo,index) => {
			// 	if ()
			// })}

			<div className="Todo">
				<h3>Hello world</h3>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log("state: ", state);
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	updateTodo
})(Todo);
