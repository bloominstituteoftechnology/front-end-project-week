import React from 'react';
import IndividualNote from './IndividualNote.js';
import { deleting, deleted } from '../actions/index.js';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DeleteWrapper = styled.div`
	opacity: 0.2;
`;

const NoteWrapper = styled.div`
	width: 18rem;
	padding-right: 135rem;
	left: -81px;
`;

const DeleteWindow = styled.div`
	position: fixed;
	bottom: 30%;
	left: 37%;
	width: 300px;
	border: 3px solid gray;
	padding: 8rem;
	background-color: white;
	z-index: 1;
	display: flex;
	flex-wrap: wrap;
	font-size: 2rem;
`;

const YesButton = styled.button`
	background-color: red;
	color: white;
	border: 1 px solid gray;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 4rem;
	padding-right: 4rem;
	margin-right: 2rem;
	margin-top: 2rem;
	font-family: arial;
	font-size: 2rem;
`;

const NoButton = styled.a`
	background-color: aqua;
	color: white;
	border: 1px solid gray;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 4.5rem;
	padding-right: 4.5rem;
	margin-right: 2rem;
	margin-top: 2rem;
	text-decoration: none;
	font-family: arial;
`;
class DeleteNote extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.deleting();
	}

	deleteHandler = e => {
		this.props.deleted(this.props.match.params.id);
		this.props.history.push(`/`);
	};

	render() {
		return (
			<div>
				<DeleteWindow>
					Are You Sure You Want To Delete?
					<YesButton onClick={this.deleteHandler}>Delete</YesButton>
					<NoButton
						href={`http://localhost:3000/${this.props.match.params.id}`}
					>
						No
					</NoButton>
				</DeleteWindow>
				<DeleteWrapper>
					<NoteWrapper>
						<IndividualNote passedId={this.props.match.params.id} />
					</NoteWrapper>
				</DeleteWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		state: state.currentIndividual,
		deleting: state.deleting,
		deleted: state.deleted
	};
};

export default connect(
	mapStateToProps,
	{ deleting, deleted }
)(DeleteNote);
