import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// material ui components
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
// actions
import { updateTodo } from "../actions/index";
// styles
import "../styles/CreateTodoForm.css";

class EditTodoForm extends Component {
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
	// update an existing todo
	handleUpdateTodo = id => {
		const { title, text } = this.state;
		this.props.updateTodo(id, title, text);
		this.setState({ title: "", text: "" });
	};

	render() {
		const { id } = this.props.location.state;
		return [
			<div className="row">
				<h3 className="CreateTodoForm_header">Edit Note:</h3>
				<TextField
					className="CreateTodoForm_title"
					hintText="Note Title"
					hintText={this.props.todos[parseInt(id, 10)].title}
					floatingLabelText="Note Title"
					underlineShow={false}
					name="title"
					value={this.state.title}
					onChange={this.handleNewInput}
				/>
			</div>,
			<div className="row">
				<TextField
					className="CreateTodoForm_content"
					hintText={this.props.todos[parseInt(id, 10)].text}
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
			</div>,
			<div className="row">
				<Link to="/">
					<RaisedButton
						className="CreateTodoForm_savebtn"
						label="Update"
						primary={true}
						// style={style}
						onClick={() => {
							this.handleUpdateTodo(id);
						}}
					/>
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
	updateTodo
})(EditTodoForm);
