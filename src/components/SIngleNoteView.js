import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import { Link } from 'react-router-dom';


class SingleNoteView extends Component {

	componentDidMount() {
		this.props.getNote(this.props.match.params.id);
	}

	deleteNote = () => {
		this.props.deleteNote(this.props.match.params.id, this.props.history);
	};


	render() {

		return (
			<div className="singlenoteDisplay">
				<div className="button-flex">
					<Link to={`/updateNote/${this.props.match.params.id}`}>edit</Link>
					<h3 onClick={this.deleteNote}>delete</h3>
				</div>

				<h1 className="note-page-title">{this.props.note.title}</h1>
				<p className="note-page-text">{ this.props.note.content}</p>
			</div>
		);
	}




}


const mapStateToProps = state => {
	return {
		note: state.note,
	}
}

export default connect(
	mapStateToProps,
	{ getNote, deleteNote }
)(SingleNoteView);