import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
// components
import Todo from "./Todo";
// material components
import { Card, CardText } from "material-ui/Card";
// styles
import "../styles/SingleTodos.css";
// <Route path="/todo/:id" {...props} render={props => <Todo {...props} />} />
const SingleTodo = props => {
	return [
		<Link to={`/todo/${props.index}`}>
			<Card className="SingleTodo">
				<CardText>
					<h3>{props.todo.title}</h3>
					<p>{props.todo.text}</p>
				</CardText>
			</Card>
		</Link>
	];
};

export default SingleTodo;
