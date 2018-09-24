import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import "./App.css";
import { getNotes } from "./components/actions/actions";
import { connect } from "react-redux";
import Note from "./components/NotesContainer/Note";

class NoteContainer extends Component {
	componentDidMount() {
		this.props.getNotes(this.props.notes);
	}
	render() {
		return (
			<div className="App">
				<SidebarContainer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notes
});

export default connect(
	mapStateToProps,
	{ getNotes }
)(NoteContainer);
