import React, { Component } from 'react';
import "../css/note.css"
import Note from './note'
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import { CSVLink } from "react-csv";

class NoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			tags: '',
			title: '',
			textBody: '',
			id: '',
		};
	}

	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<div className="note-list"><div className="title-container"><div className="list-title">Notes:</div>
				<div className="csv-button"><CSVLink data={this.props.notes}>Export to .csv</CSVLink></div></div>
				<div className="list-container">
					{this.props.notes.map((note, index) => {
						return <Note key={index} title={note.title} viewNote={this.props.viewNote} textBody={note.textBody} id={note.id} noteView={this.props.noteView} notes={this.state.notes} />
					})}
				</div>
			</div>
		);
	}
};
const mapStateToProps = state => {
	const { notesReducer } = state;
	return {
		notes: notesReducer.notes,
		error: notesReducer.error,
		gettingNotes: notesReducer.gettingNotes
	};
};

export default connect(mapStateToProps, {
	getNotes
})(NoteList);
