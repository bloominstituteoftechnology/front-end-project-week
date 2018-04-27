import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// actions
import { toggleTodo, deleteTodo, archiveTodo } from "../actions/index";
// material components
import { Card, CardText } from "material-ui/Card";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// styles
import "../bootstrap/css/bootstrap.css";
import "../styles/SingleTodos.css";

// const SingleTodo = props => {
class SingleTodo extends React.Component {
	// change a todo's completion status
	handleToggleTodo = id => {
		this.props.toggleTodo(id);
	};
	// delete a todo
	handleDeleteTodo = index => {
		this.props.deleteTodo(index);
	};
	// archive a todo
	handleArchiveTodo = id => {
		this.props.archiveTodo(id);
	};

	render() {
		const { id } = this.props.todo;
		return [
			<Card className="SingleTodo">
				<CardText>
					<Link to={`/todo/${this.props.index}`}>
						<h3>{this.props.todo.title}</h3>
					</Link>
					<p
						className="SingleTodo_content"
						onClick={() => this.handleToggleTodo(id)}
						style={{
							textDecoration: this.props.todo.isComplete
								? "line-through"
								: "none"
						}}
					>
						{this.props.todo.text}
					</p>
					<div className="row SingleTodo_footer">
						<IconMenu
							iconButtonElement={
								<IconButton>
									<MoreVertIcon className="SingleTodo__menu" />
								</IconButton>
							}
							anchorOrigin={{
								horizontal: "left",
								vertical: "top"
							}}
							targetOrigin={{
								horizontal: "left",
								vertical: "top"
							}}
						>
							<Link to={`/todo/${this.props.index}`}>
								<MenuItem primaryText="Edit this note" />
							</Link>
							<MenuItem
								primaryText="Delete"
								onClick={() => {
									this.handleDeleteTodo(this.props.index);
									this.props.handleClick("Item removed from list");
								}}
							/>
							<MenuItem
								primaryText="Archive"
								onClick={() => {
									this.handleArchiveTodo(id);
									this.props.handleClick("Archived item");
								}}
							/>
						</IconMenu>
					</div>
				</CardText>
			</Card>
		];
	}
}

export default connect(null, { toggleTodo, deleteTodo, archiveTodo })(
	SingleTodo
);
