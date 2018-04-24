import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
// components
import Todo from "./Todo";
// material components
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
// styles
import "../styles/SingleTodos.css";

const SingleTodo = props => {
	console.log("PROPS singletodo:", props.todo.text);
	return [
		<Link to={`/todo/${props.index}`}>
			<Card className="SingleTodo">
				<CardText>
					<h3>{props.todo.title}</h3>
					<p>{props.todo.text}</p>
				</CardText>
			</Card>
		</Link>,
		<Route
			exact
			path="/todo/:id"
			{...props}
			render={props => <Todo {...props} />}
		/>
	];
};

export default SingleTodo;
