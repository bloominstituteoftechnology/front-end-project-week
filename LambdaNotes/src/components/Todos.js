import React, { Component } from "react";
import { connect } from "react-redux";
import SingleTodo from "./SingleTodo";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/SingleTodos.css";

class Todos extends Component {
	render() {
		return (
			<div className="container">
				<h3 className="Notes__header">Your Notes:</h3>
				{this.props.todos.map((todo, index) => {
					return <SingleTodo key={todo.id} todo={todo} index={index} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("state: ", state);
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {})(Todos);
