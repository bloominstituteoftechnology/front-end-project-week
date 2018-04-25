import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
// actions
import { deleteTodo, updateTodo } from "../actions/index";
// material components
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/Todo.css";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleDeleteTodo = id => {
		// console.log("id: ", id);
		this.props.deleteTodo(id);
	};

	render() {
		const { id } = this.props.match.params;
		// Dialogue actions
		const actions = [
			<FlatButton
				label="Delete"
				primary={true}
				onClick={() => {
					this.handleClose();
					this.handleDeleteTodo(id);
				}}
			/>,
			<FlatButton
				label="No"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>
		];

		return (
			<div className="Todo">
				<Dialog
					title="Dialog With Actions"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				/>
				<div className="row">
					<div className="col-md-12">
						<Link
							to={{
								pathname: "/editTodo",
								state: {
									id: id
								}
							}}
						>
							<FlatButton className="Todo_button">Edit</FlatButton>
						</Link>
						<FlatButton className="Todo_button" onClick={this.handleOpen}>
							Delete
						</FlatButton>
					</div>
				</div>

				{this.props.todos.includes(this.props.todos[id]) ? (
					<div className="row">
						<div className="col-md-12">
							<Paper className="Todo_content">
								<h3 className="Todo_header">{this.props.todos[id].title}</h3>
								<p className="Todo_text">{this.props.todos[id].text}</p>
							</Paper>
						</div>
					</div>
				) : (
					<Redirect to="/" />
				)}
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
	deleteTodo,
	updateTodo
})(Todo);
