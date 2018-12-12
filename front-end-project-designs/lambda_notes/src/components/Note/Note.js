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

	a {
		color: #20272d;

		&:hover {
			color: #24b8bd;
		}
	}

	.note-header-link {
		margin: 0 25px;
		color: #20272d;
		text-decoration: underline;
		font-weight: bold;
	}

	.delete-link {
		cursor: pointer;
		margin: 0 25px;

		&:hover {
			text-decoration: underline;
			color: #24b8bd;
		}
	}

	.favorite {
		cursor: pointer;
		margin: 0 25px;

		i {
			color: #b92f27;
		}

		&:hover {
			text-decoration: underline;
			color: #24b8bd;
		}
	}
`;

const NoteCardTitle = styled.h2`
	color: #20272d;
	margin: 0 0 25px;
	overflow-wrap: break-word;
	word-wrap: break-word;

	.favorite-star {
		margin-right: 20px;
		color: #b92f27;
	}
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

// =============== END OF STYLES

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: null,
			modal: false,
			id: this.props.match.params.noteId,
			isStarred: false,
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

	starToggle = () => {
		this.setState({
			isStarred: !this.state.isStarred,
		});
	};

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
					<div className="favorite" onClick={this.starToggle}>
						{this.state.isStarred === true ? (
							<i class="fas fa-star favorite-star" />
						) : (
							<i class="far fa-star favorite-star" />
						)}
						favorite
					</div>
					<Link
						to={`/notes/${note._id}/edit`}
						classNameName="note-header-link"
					>
						<i className="fas fa-edit" />
						edit
					</Link>
					<div className="delete-link" onClick={this.toggle}>
						<i className="fas fa-trash-alt" />
						delete
					</div>
				</NoteCardHeader>
				<NoteCardContainer
					history={this.props.history}
					notes={this.props.notes}
				>
					<NoteCardTitle>
						{this.state.isStarred === true ? (
							<i
								class="fas fa-star favorite-star"
								onClick={this.starToggle}
							/>
						) : (
							<i
								class="far fa-star favorite-star"
								onClick={this.starToggle}
							/>
						)}

						{this.state.note.title}
					</NoteCardTitle>
					<NoteCardContent>
						{this.state.note.textBody}
					</NoteCardContent>
				</NoteCardContainer>
			</NoteComponentWrapper>
		);
	}
}

export default Note;
