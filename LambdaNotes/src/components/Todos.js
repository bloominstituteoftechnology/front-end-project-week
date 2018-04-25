import React, { Component } from "react";
import { connect } from "react-redux";
import SingleTodo from "./SingleTodo";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/SingleTodos.css";

class Todos extends Component {
	render() {
		console.log("props", this.props.todos);
		return (
			<div className="container">
				<h3 className="Notes__header">Your Notes:</h3>

				{this.props.todos.map((todo, index) => {
					return <SingleTodo key={index} todo={todo} index={index} />;
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {})(Todos);
