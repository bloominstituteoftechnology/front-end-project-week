import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote } from '../actions';


class SingleNoteView extends Component {
	
	componentDidMount() {
		this.props.getNote(this.props.match.params.id);
	}

	render() {
		return (

			<div className="notesDisplay">
				<h1 className="note-page-title">{this.props.note.title}</h1>
				<p className="note-page-text">{this.props.note.textBody}</p>
			</div>
		);
	}
}


const mapStateToProps = state => {
	return {
		note:state.note,
	}
}

export default connect(
	mapStateToProps,
	{ getNote }
)(SingleNoteView);