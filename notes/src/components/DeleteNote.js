import React from 'react';
import IndividualNote from './IndividualNote.js';
import { deleting } from '../actions/index.js';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DeleteWrapper = styled.div`
	opacity: 0.2;
	width: 690%;
`;

class DeleteNote extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.deleting();
	}

	render() {
		return (
			<DeleteWrapper>
				<IndividualNote passedId={this.props.match.params.id} />
			</DeleteWrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		state: state.currentIndividual,
		deleting: state.deleting
	};
};

export default connect(
	mapStateToProps,
	{ deleting }
)(DeleteNote);
