import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
// actions
import { deleteTodo, toggleTodo } from "../actions/index";
// material components
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/Todo.css";
import "../styles/animation.css";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			toggled: false
		};
	}
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleDeleteTodo = id => {
		this.props.deleteTodo(id);
	};
	handleToggle = () => {
		this.setState({ toggled: !this.state.toggled });
	};
	handleComplete = id => {
		this.props.toggleTodo(this.props.todos[id].id);
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
			<FlatButton label="No" primary={true} onClick={this.handleClose} />
		];

		return (
			<div className="Todo fade">
				{/* Delete Modal */}
				<Dialog
					className="Todo__Dialog"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					Are you sure you want to delete this?
				</Dialog>
				{/* Note/List View Toggle, Edit Delete Buttons */}
				<div className="row">
					<div className="col-md-12 Todo_button_container">
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
						<FlatButton className="Todo_button" onClick={this.handleToggle}>
							<i className="material-icons md-24">list</i>
						</FlatButton>
					</div>
				</div>
				{/*	NOTE VIEWS */}
				{this.props.todos.includes(this.props.todos[id]) ? (
					// LIST VIEW - todos with sub tasks [read only]
					this.props.todos[id].listify ? (
						<Paper className="Todo_content">
							<List>
								{this.props.todos[id].text.split("\n").map(line => {
									return (
										<ListItem
											primaryText={line}
											secondaryText={this.props.todos[id].title}
											style={{
												textDecoration: this.props.todos[id].isComplete
													? "line-through"
													: "none"
											}}
										/>
									);
								})}
							</List>
						</Paper>
					) : // TOGGLE VIEW - adds a checkbox with a todo to mark for completion
					this.state.toggled ? (
						<Paper className="Todo_content">
							<List>
								<ListItem
									primaryText={this.props.todos[id].text}
									secondaryText={this.props.todos[id].title}
									leftCheckbox={
										<Checkbox onCheck={() => this.handleComplete(id)} />
									}
									style={{
										textDecoration: this.props.todos[id].isComplete
											? "line-through"
											: "none"
									}}
								/>
							</List>
						</Paper>
					) : (
						// NORMAL VIEW - read a todo with no checkboxes
						<div className="row">
							<div className="col-md-12">
								<Paper className="Todo_content">
									<h3 className="Todo_header">{this.props.todos[id].title}</h3>
									<p
										style={{
											textDecoration: this.props.todos[id].isComplete
												? "line-through"
												: "none"
										}}
										className="Todo_text"
										onClick={() => this.handleComplete(id)}
									>
										{this.props.todos[id].text}
									</p>
								</Paper>
							</div>
						</div>
					)
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
	toggleTodo
})(Todo);
