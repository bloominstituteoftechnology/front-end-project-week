import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { addTodo } from "../actions/index";

class CreateTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodoTitle: "",
			newTodoText: ""
		};
	}
	handleNewInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		console.log("TITLE: ", this.state.newTodoTitle);
		console.log("TEXT: ", this.state.newTodoText);
		return (
			<form>
				<input
					type="text"
					placeholder="Name your todo here..."
					name="newTodoTitle"
					value={this.state.newTodoTitle}
					onChange={this.handleNewInput}
				/>
				<textarea
					placeholder="Type away here!"
					name="newTodoText"
					value={this.state.newTodoText}
					onChange={this.handleNewInput}
				/>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	addTodo
})(CreateTodoForm);
