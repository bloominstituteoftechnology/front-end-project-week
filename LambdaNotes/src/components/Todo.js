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
import Toggle from "material-ui/Toggle";
import { List, ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/Todo.css";

// toggle should toggle whether or not a list view of a card appears [onToggle]
// default toggle status is false
// new tasks should autogenerate another list field

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			toggled: true
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
			<FlatButton
				label="No"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>
		];

		return (
			<div className="Todo">
				{/* Delete Modal */}
				<Dialog
					title="Dialog With Actions"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				/>
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
						<Toggle className="Todo_toggle" onToggle={this.handleToggle} />
					</div>
				</div>
				{/*	Note View */}
				{this.props.todos.includes(this.props.todos[id]) ? (
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
										// onClick={this.handleComplete(id)}
										className="Todo_text"
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
