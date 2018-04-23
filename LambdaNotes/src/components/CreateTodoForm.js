import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// actions
import { addTodo } from "../actions/index";

class CreateTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			text: ""
		};
	}
	// capture new todo data
	handleNewInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// add new todo to todo list in redux store
	handleAddTodo = () => {
		const { title, text } = this.state;
		this.props.addTodo(title, text);
		// reset form fields
		this.setState({ title: "", text: "" });
	};

	render() {
		// console.log("TITLE: ", this.state.title);
		// console.log("TEXT: ", this.state.text);
		return (
			<form>
				<input
					type="text"
					placeholder="Note Title"
					name="title"
					value={this.state.title}
					onChange={this.handleNewInput}
				/>
				<textarea
					placeholder="Note Content"
					name="text"
					value={this.state.text}
					onChange={this.handleNewInput}
				/>
				<Link to="/">
					<button type="button" onClick={this.handleAddTodo}>
						Save
					</button>
				</Link>
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
