import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes } from "../actions";

class NotesList extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<div
				className="container bg-light">
				<h2>Notes List</h2>
				<ul className="note-grid">
					{this.props.notes.map((note) => {
						return (
							<li className="friend" key={note.id}>
								<div>{note.name}</div>
								<div>{note.age}</div>
								{/* <div>{note.title}</div> */}
								{/* <hr /> */}
								{/* <div>{note.content}</div> */}
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
