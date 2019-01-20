import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIndividual } from '../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IndividualNoteWrapper = styled.div`
	width: 70vw;
	background-color: #e6eef0;
	display: flex;
	min-height: 100vh;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-bottom: 100%;
	align-content: start;
`;

const Title = styled.h1`
	height: 2.6rem;
	font-size: 2rem;
	padding-top: 5rem;
	padding-bottom: 1rem;
	padding-left: 5rem;
	padding-right: 10rem;
	margin-bottom: 1rem;
`;

const Text = styled.p`
	width: 100%;
	height: 35rem;
	padding: 12px;
	padding-left: 5rem;
	resize: vertical;
	margin-bottom: 1rem;
	font-family: arial;
	font-size: 1.6rem;
`;

const Linky = styled.div`
	color: black;
	font-size: 1.5rem;
`;

const LinkWrapper = styled.div`
	width: 28%;
	display: flex;
	justify-content: space-around;
	margin-top: 3rem;
	margin-right: 1rem;
`;

class IndividualNote extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('deleting' + this.props.deleting);
		if (this.props.deleting) {
			console.log('state _id' + this.props.state.title);
			const id = this.props.passedId;
			console.log('passedid=' + this.props.passedId);
			this.props.getIndividual(id);
		} else {
			const id = this.props.match.params.id;
			this.props.getIndividual(id);
		}
	}
	render() {
		return (
			<IndividualNoteWrapper>
				<Title>{this.props.state.title}</Title>
				<LinkWrapper>
					<Linky>
						{' '}
						<Link to={`/individual/${this.props.state._id}/edit`}>EDIT</Link>
					</Linky>
					<Linky>
						{' '}
						<Link to={`/individual/${this.props.state._id}/delete`}>
							DELETE
						</Link>
					</Linky>
				</LinkWrapper>
				<Text>{this.props.state.textBody}</Text>
			</IndividualNoteWrapper>
		);
	}
}

const mapStateToProps = state => {
	console.log('title=' + state.currentIndividual.title);
	return {
		state: state.currentIndividual,
		deleting: state.deleting
	};
};

export default connect(
	mapStateToProps,
	{ getIndividual }
)(IndividualNote);
