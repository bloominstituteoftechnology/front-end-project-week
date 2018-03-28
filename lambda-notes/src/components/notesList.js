import React, { Component } from "react";
import { NavItem, NavLink } from "reactstrap";
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
				<ul className="d-flex flex-wrap">
					{this.props.notes.map((note) => {
						return (
							<li className="friend" key={note.id}>
								<NavItem>
									<NavLink>
										<Link to={`/notes/${note.id}`}>
											{/* <div>{note.name}</div>
										<div>{note.age}</div> */}
											<div>{note.title}</div>
											<hr />
											<div>{note.content}</div>
										</Link>
									</NavLink>
								</NavItem>
							</li>
						);
					})}
				</ul>
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
