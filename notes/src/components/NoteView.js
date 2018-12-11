import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNote } from "../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ActiveTitle, NoteBox } from "./ListView";

const NoteViewWrapper = styled.div`
	display: flex;
    flex-direction: column;
    padding-right: 20px;
`;

const NoteViewHeader = styled.header`
	align-self: flex-end;
	position: relative;
	margin: 25px 10px;
`;

const NavA = styled.a`
	color: rgb(60, 60, 60);
	font-size: 1.2rem;
	margin: 10px;
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
	width: 58%;
	border: 1px solid darkgrey;
	background: white;
	margin-top: 195px;
	height: 195px;
	z-index: 1;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;

    @media (max-width: 830px) {
        height: 250px;
        width: 48%;
        min-width: 300px;

	}
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 830px) {
		flex-direction: column;
	}
`;

const DeleteButton = styled.button`
	background: ${props => (props.red ? "red" : "teal")};
	color: white;
	height: 50px;
	margin-top: 35px;
	margin-right: 20px;
	margin-left: 20px;
	width: 200px;
	font-size: 1.2rem;
	font-weight: bold;
	border: 1px solid darkgrey;
	:hover {
		cursor: pointer;
	}
`;

const ActiveTitle2x = styled(ActiveTitle)`
	margin-top: 5px;
`;

class NoteView extends Component {
	constructor() {
		super();
		this.state = {
			displayDelete: false
		};
	}

	showModal(ev) {
		ev.preventDefault();
		this.setState({ displayDelete: true });
	}

	hideModal(ev, loc) {
		ev.stopPropagation();
		if (loc === "outside") this.setState({ displayDelete: false });
	}

	deleteHandler(ev, id) {
		ev.preventDefault();
		this.props.deleteNote(id);
		this.setState({ displayDelete: false });
		this.props.history.push("/");
	}

	render() {
		if (!this.props.notes.length || this.props.fetchingNotes) {
			return <ActiveTitle>Loading note... </ActiveTitle>;
		}

		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);

		if (note === undefined) {
			return <ActiveTitle>Note doesn't exist...</ActiveTitle>;
		}

		return (
			<NoteViewWrapper>
				<NoteViewHeader>
					<NavA as={Link} to={`/edit/${note._id}`}>
						edit
					</NavA>
					<NavA href='/' onClick={ev => this.showModal(ev)}>
						delete
					</NavA>
				</NoteViewHeader>
				<ActiveTitle2x> {note.title} </ActiveTitle2x>
				<NoteBox>
					<p> {note.textBody} </p>
				</NoteBox>
				{this.state.displayDelete ? (
					<Delete onClick={ev => this.hideModal(ev, "outside")}>
						<DeleteBox onClick={ev => this.hideModal(ev, "inside")}>
							<p>Are you sure you want to delete this?</p>
							<ButtonWrapper>
								<DeleteButton
									red
									onClick={ev =>
										this.deleteHandler(ev, note._id)
									}>
									Delete
								</DeleteButton>
								<DeleteButton
									onClick={ev =>
										this.hideModal(ev, "outside")
									}>
									No
								</DeleteButton>
							</ButtonWrapper>
						</DeleteBox>
					</Delete>
				) : (
					<></>
				)}
			</NoteViewWrapper>
		);
	}
}
export default connect(
	({ notes, fetchingNotes }) => ({ notes, fetchingNotes }),
	{ deleteNote }
)(NoteView);
