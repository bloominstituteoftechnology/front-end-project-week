import React, { Component } from "react";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import "./App.css";
import { getNotes } from "./components/actions/actions";
import { connect } from "react-redux";
import OneNote from "./components/NotesContainer/OneNote";
import { withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			backdrop: true
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleDelete(props) {
		const noteID = parseInt(this.props.match.params.id, 10);

		let thisNote = this.props.notes.find(note => note.id === noteID);
		const newNotes = this.props.notes.filter(note => note.id != thisNote.id);
		this.props.getNotes(newNotes);
		this.props.history.push("/");
	}
	changeBackdrop(e) {
		let value = e.target.value;
		if (value !== "static") {
			value = JSON.parse(value);
		}
		this.setState({ backdrop: value });
	}

	render(props) {
		const noteID = parseInt(this.props.match.params.id, 10);

		let thisNote = this.props.notes.find(note => note.id === noteID);
		return (
			<div>
				<div className="App">
					<SidebarContainer />
					<div className="newNote">
						<div className="edit-delete">
							<button
								onClick={() => this.props.history.push(`/note/${noteID}/edit`)}
								className="button"
							>
								edit
							</button>
							<button onClick={this.toggle} className="button">
								delete
							</button>
						</div>
						<OneNote
							note={thisNote}
							title={thisNote.title}
							body={thisNote.body}
						/>
					</div>
				</div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					backdrop={this.state.backdrop}
					modalTransition={{ timeout: 200 }}
					backdropTransition={{ timeout: 200 }}
				>
					<ModalHeader toggle={this.toggle}>Delete Note</ModalHeader>
					<ModalBody>Are you sure you wish to delete this note?</ModalBody>
					<ModalFooter>
						<Button
							color="danger"
							onClick={() => this.handleDelete(this.props)}
						>
							Delete
						</Button>{" "}
						<Button outline color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
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
)(withRouter(NoteContainer));
