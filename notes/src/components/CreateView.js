import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";

class CreateView extends Component {
    
    render() {
		return <div>Hello from CreateView {this.props.state}</div>;
	}
}
export default connect(
	({ notes }) => ({ notes }),
	{
		getNotes,
		addNote,
		deleteNote,
		editNote
	}
)(CreateView);
