import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import Edit from './Edit';
import { Link } from 'react-router-dom';


class SingleNoteView extends Component {

	componentDidMount() {
		console.log(this.props.match.params.id)
		this.props.getNote(this.props.match.params.id);
	}

	deleteNote = () => {
		this.props.deleteNote(this.props.match.params.id, this.props.history);
	};


	render() {


		return (

			<div className="singlenoteDisplay">
				<div className="button-flex">
					<Link to="/edit-note">edit</Link>
					<h3 onClick={this.deleteNote}>delete</h3>
				</div>

				<h1 className="note-page-title">{this.props.note.title}</h1>
				<p className="note-page-text">{this.props.note.textBody}</p>

				<Edit id={this.props.match.params.id} />


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