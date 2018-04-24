import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// material ui components
import TextField from "material-ui/TextField";
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
		return [
			<div className="row">
				<h3>Create New Note:</h3>
				<TextField
					hintText="Hint Text"
					floatingLabelText="Floating Label Text"
					name="title"
					value={this.state.title}
					onChange={this.handleNewInput}
				/>
			</div>,
			<div className="row">
				<TextField
					hintText="Message Field"
					floatingLabelText="MultiLine and FloatingLabel"
					multiLine={true}
					rows={4}
					name="text"
					value={this.state.text}
					onChange={this.handleNewInput}
				/>
			</div>,
			<div className="row">
				<Link to="/">
					<button type="button" onClick={this.handleAddTodo}>
						Save
					</button>
				</Link>
			</div>
		];
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
