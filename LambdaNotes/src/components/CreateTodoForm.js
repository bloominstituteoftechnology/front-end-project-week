import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// material ui components
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// actions
import { addTodo } from "../actions/index";
// styles
import "../styles/CreateTodoForm.css";
import "../styles/animation.css";

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
		return (
			<div className="fade">
				<div className="row">
					<h3 className="CreateTodoForm_header">Create New Note:</h3>
					<TextField
						className="CreateTodoForm_title"
						hintText="Note Title"
						floatingLabelText="Note Title"
						underlineShow={false}
						name="title"
						value={this.state.title}
						onChange={this.handleNewInput}
					/>
				</div>
				<div className="row">
					<TextField
						className="CreateTodoForm_content"
						hintText="Note Content"
						hintStyle={{
							top: 25
						}}
						underlineShow={false}
						multiLine={true}
						rows={10}
						name="text"
						value={this.state.text}
						onChange={this.handleNewInput}
					/>
				</div>
				<div className="row">
					<Link to="/">
						<RaisedButton
							className="CreateTodoForm_savebtn"
							label="Save"
							primary={true}
							onClick={this.handleAddTodo}
						/>
					</Link>
				</div>
			</div>
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
