import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// actions
import { toggleTodo } from "../actions/index";
// components
import Todo from "./Todo";
// material components
import { Card, CardText } from "material-ui/Card";
// styles
import "../styles/SingleTodos.css";

// const SingleTodo = props => {
class SingleTodo extends React.Component {
	// change a todo's completion status
	handleToggleTodo = id => {
		console.log("MADE IT TO handleToggleTodo: ", id);
		this.props.toggleTodo(id);
	};

	render() {
		// console.log("SINGLETODO PROPS: ", this.props);
		const { id } = this.props.todo;
		// console.log("SINGLETODO ID: ", this.props.todo.id);
		console.log("COMPLETE: ", this.props.todo.isComplete);
		return [
			<Card className="SingleTodo">
				<CardText onClick={() => this.handleToggleTodo(id)}>
					<Link to={`/todo/${this.props.index}`}>
						<h3>{this.props.todo.title}</h3>
					</Link>
					<p
						style={{
							textDecoration: this.props.todo.isComplete
								? "line-through"
								: "none"
						}}
					>
						{this.props.todo.text}
					</p>
				</CardText>
			</Card>
		];
	}
}

export default connect(null, { toggleTodo })(SingleTodo);
