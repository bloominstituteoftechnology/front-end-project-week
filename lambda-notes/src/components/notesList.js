import React, { Component } from "react";
import { NavItem, NavLink, CardTitle, CardText, CardColumns, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../actions";

class NotesList extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.getNotes();
		}, 20);
	}

	// removeNote = (id) => {
	// 	this.props.deleteNote(id);
	// 	setTimeout(() => {
	// 		this.props.getNotes();
	// 	}, 20);
	// };

	render() {
		return (
			<div className="container bg-light">
				<h2>Notes List</h2>
				<CardColumns>
				{/* <ul> */}
					{this.props.notes.map((note) => {
						return (
							// <li key={note.id}>
						<Card key={note.id}>
								<CardBody>
										<Link to={`/notes/${note.id}`}>
											{/* <div>{note.name}</div>
										<div>{note.age}</div> */}
											<CardTitle>{note.title}</CardTitle>
											<hr />
											<CardText>{note.content}</CardText>
										</Link>
								</CardBody>
							</Card>
							// </li>
						);
					})}
				{/* </ul> */}
			</CardColumns>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
};
export default connect(mapStateToProps, { getNotes })(NotesList);
