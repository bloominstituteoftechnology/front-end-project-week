import React, { Component } from "react";
import { connect } from "react-redux";
// actions
import { deleteTodo, updateTodo } from "../actions/index";
// material components
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/Todo.css";

class Todo extends Component {
	render() {
		console.log("Todo PROPS: ", this.props);
		const { id } = this.props.match.params;
		console.log("id: ", id);
		return (
			<div className="Todo">
				{/* one row for edit and delete buttons*/}
				<div className="row">
					<div className="col-md-12">
						{/* Link edit button to EditTodoForm */}
						<FlatButton className="Todo_button">Edit</FlatButton>
						{/* Trigger modal to delete a todo */}
						<FlatButton className="Todo_button">Delete</FlatButton>
					</div>
				</div>
				{/* one row for todo title and todo content*/}
				<div className="row">
					<div className="col-md-12">
						<Paper className="Todo_content">
							<h3 className="Todo_header">
								{this.props.todos[id].title}
							</h3>
							{/* <p className="Todo_text">{this.props.todos[id].text}</p> */}
							<p className="Todo_text">
								Bacon ipsum dolor amet boudin leberkas beef ribs
								jowl andouille brisket. Burgdoggen turkey cupim
								salami, capicola biltong tri-tip leberkas ball
								tip tongue beef hamburger corned beef pig
								sirloin. Landjaeger bacon salami, pig biltong
								venison kielbasa meatloaf pork chop tail picanha
								doner drumstick. Pork chop ribeye biltong pork
								belly kielbasa cow ground round. Pork loin
								andouille shankle ground round, cow venison
								capicola leberkas. Bacon ipsum dolor amet boudin
								leberkas beef ribs jowl andouille brisket.
								Burgdoggen turkey cupim salami, capicola biltong
								tri-tip leberkas ball tip tongue beef hamburger
								corned beef pig sirloin. Landjaeger bacon
								salami, pig biltong venison kielbasa meatloaf
								pork chop tail picanha doner drumstick. Pork
								chop ribeye biltong pork belly kielbasa cow
								ground round. Pork loin andouille shankle ground
								round, cow venison capicola leberkas. Bacon
								ipsum dolor amet boudin leberkas beef ribs jowl
								andouille brisket. Burgdoggen turkey cupim
								salami, capicola biltong tri-tip leberkas ball
								tip tongue beef hamburger corned beef pig
								sirloin. Landjaeger bacon salami, pig biltong
								venison kielbasa meatloaf pork chop tail picanha
								doner drumstick. Pork chop ribeye biltong pork
								belly kielbasa cow ground round. Pork loin
								andouille shankle ground round, cow venison
								capicola leberkas.
							</p>
						</Paper>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log("state: ", state);
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	updateTodo
})(Todo);
