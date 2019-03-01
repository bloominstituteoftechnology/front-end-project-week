import React from 'react';
import IndividualNote from './IndividualNote.js';
import { deleting, deleted, didntDelete } from '../actions/index.js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DeleteWrapper = styled.div`
	opacity: 0.2;
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
const Buttons = styled.div`
	display: flex;
`;

const YesButton = styled.button`
	background-color: red;
	color: white;
	border: 1 px solid gray;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 4rem;
	padding-right: 4rem;
	margin-right: 1rem;
	margin-top: 2rem;
	font-family: arial;
	font-size: 2rem;
`;

const NoButton = styled.button`
	background-color: aqua;
	color: white;
	border: 1px solid gray;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 5.75rem;
	padding-right: 5.75rem;
	margin-right: 2rem;
	margin-top: 2rem;
	text-decoration: none;
	font-family: arial;
	text-decoration: none;
	font-size: 2rem;
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
	noHandler = e => {
		this.props.didntDelete();
	};

	render() {
		return (
			<div>
				<DeleteWindow>
					Are You Sure You Want To Delete?
					<Buttons>
						<YesButton onClick={this.deleteHandler}>Delete</YesButton>

						<Link
							onClick={this.noHandler}
							to={`/individual/${this.props.match.params.id}`}
						>
							<NoButton>No</NoButton>
						</Link>
					</Buttons>
				</DeleteWindow>
				<DeleteWrapper>
					<IndividualNote passedId={this.props.match.params.id} />
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
	{ deleting, deleted, didntDelete }
)(DeleteNote);
