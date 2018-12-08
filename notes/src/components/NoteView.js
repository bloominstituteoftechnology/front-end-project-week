import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, deleteNote } from "../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const NoteViewHeader = styled.header`
	align-self: flex-end;
	position: relative;
`;

const Delete = styled.div`
	position: absolute;
	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
	background-color: rgb(100, 100, 100, 0.8);
`;

const DeleteBox = styled.div`
	margin: 0 auto;
	width: 40%;
	border: 1px solid black;
	background: white;
	margin-top: 100px;
	height: 200px;
	z-index: 1;
`;

const DeleteButton = styled.button`
	background: red;
	color: white;
`;

class NoteView extends Component {
	constructor() {
		super();
		this.state = {
			displayDelete: false
		};
    }
   
    componentDidMount(){
        this.props.getNotes();
    }

	showDeleteModal(ev, id) {
		ev.preventDefault();
		this.setState({ displayDelete: true });
	}

	hideDeleteModal(ev, loc) {
		ev.stopPropagation();
		if (loc === "outside") this.setState({ displayDelete: false });
	}

	deleteHandler(ev, id) {
		ev.preventDefault();
		this.props.deleteNote(id);
		this.setState({ displayDelete: false });
		this.props.getNotes();
		this.props.history.push("/");
	}

	render() {
		if (!this.props.notes.length) {
			return <div>Loading note... </div>;
		}
		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);
		return (
			<NoteViewWrapper>
				<NoteViewHeader>
					<Link to={`/edit/${note._id}`}> EDIT</Link>
					<a
						href='/'
						onClick={ev => this.showDeleteModal(ev, note._id)}>
						DELETE
					</a>
				</NoteViewHeader>
				<section>
					<h1>{note.title} </h1>
					<p> {note.textBody} </p>
				</section>
				{this.state.displayDelete ? (
					<Delete onClick={ev => this.hideDeleteModal(ev, "outside")}>
						<DeleteBox
							onClick={ev => this.hideDeleteModal(ev, "inside")}>
							{/* what the EFFFFF i do not know why ^this^ works */}
							<h2>Are you sure you want to delete this?</h2>
							<DeleteButton
								onClick={ev =>
									this.deleteHandler(ev, note._id)
								}>
								Delete
							</DeleteButton>
							<DeleteButton
								onClick={ev =>
									this.hideDeleteModal(ev, "outside")
								}>
								{" "}
								No{" "}
							</DeleteButton>
						</DeleteBox>
					</Delete>
				) : (
					""
				)}
			</NoteViewWrapper>
		);
	}
}
export default connect(
	({ notes }) => ({ notes }),
	{
		getNotes,
		deleteNote
	}
)(NoteView);
