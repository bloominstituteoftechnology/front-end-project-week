import React, { Component } from "react";
// material components
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
// styles
import "../styles/SingleTodos.css";

const SingleTodo = props => {
	console.log("PROPS singletodo:", props.todo.text);
	return (
		<Card className="SingleTodo">
			<CardText>
				<h3>Hello World</h3>
				<p>{props.todo.text}</p>
			</CardText>
		</Card>
	);
};

export default SingleTodo;
