import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const NoteComponentWrapper = styled.div`
	width: 100%;
	padding: 15px;
`;

const NoteCardContainer = styled.div`
	color: #20272d;
	height: 90%;
	min-height: 150px;
	margin: 20px 20px 20px 260px;
`;

const NoteCardHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 30px;

	.note-header-link {
		margin: 0 15px;
		color: #20272d;
		text-decoration: underline;
		font-weight: bold;
	}
`;

const NoteCardTitle = styled.h2`
	color: #20272d;
	margin: 0 0 25px;
	overflow-wrap: break-word;
	word-wrap: break-word;
`;

const NoteCardContent = styled.div`
	white-space: pre-wrap;
`;

const ModalWrapper = styled.div`

	.mod-body {
		text-align: center;
	}
	.modal-footer {
		justify-content: space-evenly;
		border: 2px solid red;
	}
`;

const ModalButton = styled.button`
	background-color: #24b8bd;
	border: 0;
	color: #f3f9f9;
	padding: 12px 15px;
	margin: 15px;
	width: 180px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
`;

const DeleteButton = styled(ModalButton)`
	background-color: #d0011b;
`;

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: null,
			modal: false,
			id: this.props.match.params.noteId,
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		console.log("Note params", this.props);
		axios
			.get(
				`https://fe-notes.herokuapp.com/note/get/${
					this.props.match.params.noteId
				}`
			)
			.then(res => {
				console.log("Note > Server Response: ", res);
				this.setState({
					note: res.data,
				});
			})
			.catch(err => console.log("Note > Server Error: ", err));
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	render() {
		console.log("Note", this.props);
		const note = this.state.note;
		if (!note) return <h2>Loading...</h2>;
		return (
			<NoteComponentWrapper>
				<ModalWrapper>
					<Modal
						isOpen={this.state.modal}
						toggle={this.toggle}
						classNameName="delete-modal"
						centered={true}
					>
						<ModalBody classNameName="mod-body">
							Are you sure you want to delete this?
						</ModalBody>
						<ModalFooter classNameName="mod-footer">
							<DeleteButton
								color="primary"
								onClick={() => {
									this.props.deleteNote(this.state.id);
									this.toggle();
									this.props.history.push("/notes");
								}}
							>
								Delete
							</DeleteButton>
							<ModalButton
								color="secondary"
								onClick={this.toggle}
							>
								No
							</ModalButton>
						</ModalFooter>
					</Modal>
				</ModalWrapper>
				<NoteCardHeader>
					<Link
						to={`/notes/${note._id}/edit`}
						classNameName="note-header-link"
					>
						<i className="fas fa-edit" />
						edit
					</Link>
					{/* <Link
						to={`/notes/${note._id}/delete`}
						classNameName="note-header-link"
					> */}
					<i className="fas fa-trash-alt" onClick={this.toggle}>
						delete{" "}
					</i>
					{/* </Link> */}
				</NoteCardHeader>
				<NoteCardContainer
					history={this.props.history}
					notes={this.props.notes}
				>
					<NoteCardTitle>{this.state.note.title}</NoteCardTitle>
					<NoteCardContent>
						{this.state.note.textBody}
					</NoteCardContent>
				</NoteCardContainer>
			</NoteComponentWrapper>
		);
	}
}

export default Note;
