import React, { Component } from "react";
// components
import SingleTodo from "./SingleTodo";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/SingleTodos.css";
import "../styles/animation.css";

class Todos extends Component {
	render() {
		return (
			<div className="container fade">
				<h3 className="Notes__header">Your Notes:</h3>
				{this.props.todos.map((todo, index) => {
					return <SingleTodo key={todo.id} todo={todo} index={index} />;
				})}
			</div>
		);
	}
}

export default Todos;
