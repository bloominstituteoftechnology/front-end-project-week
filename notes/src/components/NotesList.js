import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const CardSection = styled.div`
	width: 70%;
	background-color: rgb(252, 252, 252);
	display: flex;
	min-height: 100vh;
	flex-wrap: wrap;
	justify-content: center;
	padding-bottom: 100%;
`;

const SubCard = styled.div`
	width: 100%;
`;

const StyledCard = styled.div`
	width: 23%;
	background-color: rgb(350, 350, 350);
	height: 25vh;
	border: lightgrey solid 0.2px;
	padding: 1rem;
	font-size: 1.6rem;
	margin-bottom: 3vh;
	margin-left: 2rem;
	text-decoration: none;
	color: black;
	display: flex;
	text-wrap: wrap;
	-ms-word-break: break-all;
	word-break: break-all;
	word-break: break-word;
`;
const Heading = styled.h1`
	font-size: 2rem;
	display: flex;
	text-wrap: wrap;
	-ms-word-break: break-all;
	word-break: break-all;
	word-break: break-word;
`;
const ViewHeader = styled.h1`
	font-size: 2.5rem;
	margin-top: 1.6rem;
	margin-left: 9.25rem;
	width: 100%;
	padding-top: 2rem;

	color: rgb(43, 44, 45);
`;

const HeaderBar = styled.div`
	background-color: #e6eef0;
`;
const LinkWrapper = styled.div`
	text-decoration: none;
	color: black;
`;
const TextWrapper = styled.div`
	text-decoration: none;
	border-top: groove lightgray;
	width: 14vw;
	padding-top: 4px;
`;

class NotesList extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		this.props.getNotes();
		console.log();
	}

	render() {
		while (this.props.updating === true) {
			return <h1>Updating the List</h1>;
		}

		if (this.props.fetchingNotes === true) {
			return <h1>Fetching Your Notes</h1>;
		} else {
			return (
				<CardSection>
					<ViewHeader>Your Notes:</ViewHeader>

					{this.props.notes.map(note => {
						return (
							<StyledCard key={note.id}>
								<Link
									style={{ textDecoration: 'none' }}
									to={`/individual/${note.id}`}
								>
									<LinkWrapper>
										<Heading>{note.title}</Heading>
										<TextWrapper>
											{note.textBody.slice(0, 80)}
											{note.textBody.length > 100 ? '-' : null}
										</TextWrapper>
									</LinkWrapper>
								</Link>
							</StyledCard>
						);
					})}
				</CardSection>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes,
		savingNote: state.savingNote,
		deleting: state.deleting,
		fetchingNotes: state.fetchingNotes,
		updating: state.updating
	};
};

export default connect(
	mapStateToProps,
	{ getNotes }
)(NotesList);
