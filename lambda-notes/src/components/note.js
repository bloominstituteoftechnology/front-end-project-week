import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import { getNote, deleteNote } from "../actions";

class Note extends Component {
	// state = {
	//   note: null
	// }

	componentDidMount() {
		// const id = this.props.match.params.id;
		// this.setState({ movie: this.props.getNote(id)
		// });
		const id = this.props.match.params;
		this.props.getNote(id);
		console.log(this.props);
	}

	// onDeleteClick() {
	// 	const { id } = this.props.match.params;

	// 	this.props.deleteNote(id, () => {
	// 		this.props.history.push("/");
	// 	});
	// }

	render() {
		console.log(this.props);
		if (!this.props.note) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<button
					className="btn btn-danger pull-xs-right"
					// onClick={this.onDeleteClick.bind(this)}
				>
					Delete
				</button>
				{/* <button
				className="btn btn-danger pull-xs-right"
				onClick={this.onEditClick.bind(this)}>
				Edit
      </button> */}
				{/* <h3>{this.state.note.name}</h3>
				<p>{this.state.note.age}</p> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		note: state.notes.match.params.id
	};
};

export default connect(mapStateToProps, {
	getNote,
	deleteNote
})(Note);
